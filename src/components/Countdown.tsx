import { useCountdown } from "../hooks/useCountdown";
import styles from "../styles/components/Countdown.module.css";

export const Countdown = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useCountdown();

  const [minuteLeft, minuteRight] = minutes
    .toString()
    .padStart(2, "0")
    .split("");
  const [secondLeft, secondRight] = seconds
    .toString()
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Cliclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              onClick={resetCountdown}
              type="button"
              className={[
                styles.countdownButton,
                styles.countdownButtonActive,
              ].join(" ")}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              onClick={startCountdown}
              type="button"
              className={styles.countdownButton}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};
