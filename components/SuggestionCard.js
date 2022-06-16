import { goToProfile } from "../lib/helpers/goToProfile";
import styles from "../styles/SuggestionCard.module.css";

const SuggestionCard = ({ src, ownedBy }) => {
  return (
    <div className={styles.card}>
      <img
        src={src}
        alt="suggested user"
        onClick={() => goToProfile(ownedBy)}
      />
    </div>
  );
};

export default SuggestionCard;
