import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

type ChallengeWithTypeString = ReturnType<() => typeof challenges[0]>;

interface Challenge extends ChallengeWithTypeString {
  type: "body" | "eye";
}

interface ChallengesContextValues {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
}

export const ChallengeContext = createContext<ChallengesContextValues>(
  {} as ChallengesContextValues
);

export function ChallengesProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel((prev) => prev + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge as Challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
