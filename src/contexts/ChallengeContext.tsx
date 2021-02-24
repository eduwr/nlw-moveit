import { createContext, ReactNode, useState } from "react";

export const ChallengeContext = createContext({});

export function ChallengesProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel((prev) => prev + 1);
  }

  return (
    <ChallengeContext.Provider value={{ level, levelUp }}>
      {children}
    </ChallengeContext.Provider>
  );
}
