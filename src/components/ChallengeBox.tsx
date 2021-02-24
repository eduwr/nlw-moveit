import styles from "../styles/components/ChallengeBox.module.css";
import { useChallenges } from "../hooks/useChallenges";

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useChallenges();

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img
              src={
                activeChallenge.type === "eye"
                  ? "icons/eye.svg"
                  : "icons/body.svg"
              }
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              onClick={resetChallenge}
              type="button"
              className={styles.challengeFailedButton}
            >
              Falhei
            </button>
            <button type="button" className={styles.challengeSuccededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de nível completando os desafios.
          </p>
        </div>
      )}
    </div>
  );
};
