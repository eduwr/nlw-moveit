import { useChallenges } from "../hooks/useChallenges";
import styles from "../styles/components/Profile.module.css";

export const Profile = () => {
  const { level } = useChallenges();
  return (
    <div className={styles.profileContainer}>
      <img
        alt="eduwr"
        src="https://avatars.githubusercontent.com/u/51808558?s=460&u=49ba9ae2dd4abb0062303df19a676a0a1e64d7eb&v=4"
      />
      <div>
        <strong>Eduardo Wronscki</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
