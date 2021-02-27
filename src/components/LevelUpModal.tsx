import { useChallenges } from "../hooks/useChallenges";
import styles from "../styles/components/LevelUpModal.module.css";

interface ModalProps {
  level: number;
  closeModal(): void;
}

export function LevelUpModal({ level, closeModal }: ModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo nível.</p>

        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="Close Button" />
        </button>
      </div>
    </div>
  );
}
