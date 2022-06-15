import { useState, useEffect } from "react";
import { searchForProfile } from "../../lib/lens/requests/profile";
import SearchIcon from "@mui/icons-material/Search";
import ProfileSearchCard from "../ProfileSearchCard";
import styles from "../../styles/Widget.module.css";

const Widget = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const fetchProfiles = async () => {
    const query = searchInput || "jo";
    const { data } = await searchForProfile(query);
    setSearchResult(data.search.items);
  };

  useEffect(() => {
    fetchProfiles();
  }, [searchInput]);
  return (
    <div className={styles.widget}>
      <div className={styles.input}>
        <SearchIcon className={styles.searchIcon} />
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search twitter..."
        />
      </div>

      <div className={styles.widgetContainer}>
        {searchResult.length !== 0 ? (
          searchResult?.map(({ handle, picture, ownedBy }) => (
            <ProfileSearchCard
              key={handle}
              src={picture?.original.url}
              handle={handle}
              ownedBy={ownedBy}
            />
          ))
        ) : (
          <p>No match</p>
        )}
      </div>
    </div>
  );
};

export default Widget;
