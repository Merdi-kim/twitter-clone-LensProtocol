import { useRouter } from "next/dist/client/router";
import ProfileCard from "../../components/ProfileCard";

const Profile = () => {
  const router = useRouter();
  const { ownedBy } = router.query;

  return <ProfileCard userAddress={ownedBy} />;
};

export default Profile;
