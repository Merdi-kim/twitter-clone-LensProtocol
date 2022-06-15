import { useAccount } from "wagmi";
import ProfileCard from "../../components/ProfileCard";

const MyProfile = () => {
  const { data } = useAccount();

  return <ProfileCard userAddress={data?.address} isMine />;
};

export default MyProfile;
