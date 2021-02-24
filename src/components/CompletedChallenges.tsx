import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/CompletedChallenges.module.css";
import { useChallenges } from "../hooks/useChallenges";

export const CompletedChallenges = () => {
  const { challengesCompleted } = useChallenges();

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};
