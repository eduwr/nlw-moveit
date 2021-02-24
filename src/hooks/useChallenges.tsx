import {useContext} from 'react';

import {ChallengeContext, ChallengesContextValues} from '../contexts/ChallengeContext';

export const useChallenges = (): ChallengesContextValues => {
  const context = useContext(ChallengeContext);
  if (context === undefined) {
    throw new Error('useChallenges must be used within a ChallengesProvider');
  }
  return context;
};
