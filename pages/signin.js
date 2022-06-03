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
  const apiKey = process.env.NEXT_PUBLIC_STORAGE_KEY
  const web3storage = new Web3Storage({token:apiKey})
  const {data : accountData} = useAccount()
  const { data : signer, isError, isLoading } = useSigner()

  const signText = (text) => {
    const ethersProvider = new ethers.providers.Web3Provider(window.ethereum).getSigner()
    return ethersProvider.signMessage(text);
  }

  const createProfileHandler = async(e) => {
    e.preventDefault()
    if(file.length === 0 || !userName) return 
    const challengeResponse = await generateChallenge(accountData?.address);
    const signature = await signer.signMessage(challengeResponse.data.challenge.text)
    const {data} = await authenticate(accountData?.address, signature);
    const localStorage = window.localStorage
    localStorage.setItem('auth_token', data.authenticate.accessToken)
    const cid = await web3storage.put(file)
    const imgLink = `https://ipfs.io/ipfs/${cid}`    
    const createProfileRequest = { 
      handle: userName,
      profilePictureUri: imgLink,   
      followModule: {
        freeFollowModule: true
      }
    }
    await createProfile(createProfileRequest)
    Router.push('/')
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
        <input type="file" onChange={uploadImage} />
        { fileUrl && <img src={fileUrl} alt="" />}
        
        { accountData?.address && <button type='submit'>submit</button> } 
        { !accountData?.address && <ConnectButton/> }

        
        
        
        
      </form>
    </div>
  )
}

export default Signin