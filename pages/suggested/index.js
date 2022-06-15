import { useState, useEffect } from "react";
import SuggestionCard from "../../components/SuggestionCard";
import { recommendedProfiles } from "../../lib/lens/requests/profile";

const Suggested = () => {
  const [recommendedUsers, setRecommendedUsers] = useState([]);

  const getRecommendedProfiles = async () => {
    const { data } = await recommendedProfiles();
    setRecommendedUsers(data.recommendedProfiles);
  };

  useEffect(() => {
    getRecommendedProfiles();
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {recommendedUsers?.map(({ ownedBy, picture }) => (
        <SuggestionCard
          key={picture?.original.url}
          src={picture?.original.url}
          ownedBy={ownedBy}
        />
      ))}
    </div>
  );
};

export default Suggested;
