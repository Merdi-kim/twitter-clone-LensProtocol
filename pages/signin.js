import { useState } from 'react'
import Router from 'next/router';
import { useAccount, useSigner } from 'wagmi'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Web3Storage } from 'web3.storage';
import { generateChallenge, authenticate, createProfile } from '../lens/requests/profile'
import styles from '../styles/Signin.module.css'

function Signin() {

  const [userName, setUserName] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [file, setFile] = useState()
  const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY
  const web3storage = new Web3Storage({token:storageKey})
  const {data : accountData} = useAccount()
  const { data : signer } = useSigner()

  const createProfileHandler = async(e) => {
    e.preventDefault()
    if(file.length === 0 && !userName) return 
    const challengeResponse = await generateChallenge(accountData?.address);
    const signature = await signer.signMessage(challengeResponse.data.challenge.text)
    const {data} = await authenticate(accountData?.address, signature);
    const localStorage = window.localStorage
    localStorage.setItem('auth_token', data.authenticate.accessToken)
    const cid = await web3storage.put([file[0]])
    const imgLink = `https://ipfs.io/ipfs/${cid}/${file[0].name}`    
    const createProfileRequest = { 
      handle: userName,
      profilePictureUri: imgLink,   
      followModule: {
        freeFollowModule: true
      }
    }
    try {
      await createProfile(createProfileRequest)
      Router.push('/')
    }
    catch (err) {
      console.log(err)
    }
  }

  const uploadImage = (e) => {
    e.preventDefault()
    const url = URL.createObjectURL(e.target.files[0])
    setFileUrl(url)
    setFile(e.target.files)

}

  return (
    <div className={styles.new_account}>
      <form onSubmit={createProfileHandler}>
        <input placeholder='Username...' type="text" onChange={(e) => setUserName(e.target.value)} />
        <input type="file" onChange={uploadImage} accept='image/*' />
        { fileUrl && <img src={fileUrl} alt="" />}
        <button type='submit'>submit</button> 
      </form>
    </div>
  )
}

export default Signin