import { useContext } from "react";

import {
  CountdownContext,
  CountdownContextValues,
} from "../contexts/CountdownContext";

export const useCountdown = (): CountdownContextValues => {
  const context = useContext(CountdownContext);
  if (context === undefined) {
    throw new Error("useCountdown must be used within a CountdownProvider");
  }
  return context;
};
