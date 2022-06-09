import { useAccount} from 'wagmi'
import ProfileCard from '../components/ProfileCard'

function Profile() {

  const { data } = useAccount()

  return (
    <ProfileCard userAddress={data?.address} isMine/>
  )
}

export default Profile