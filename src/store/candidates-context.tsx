import React, { createContext, useState } from 'react';
import { Candidate } from '../models/candidate.model';

interface CandidatesContext {
  candidatesList: Candidate[];
  handleCandidatesList: (candidatesList: Candidate[]) => void;
}

const CandidatesContext = createContext<CandidatesContext>({
  candidatesList: [],
  handleCandidatesList: (candidatesList: Candidate[]) => {},
});

export function CandidatesContextProvider(props: any) {
  const [candidatesList, setCandidatesList] = useState<Candidate[]>([]);

  function handleCandidatesList(candidatesList: Candidate[]) {
    setCandidatesList(candidatesList);
  }

  return (
    <CandidatesContext.Provider
      value={{ candidatesList, handleCandidatesList }}
    >
      {props.children}
    </CandidatesContext.Provider>
  );
}

export default CandidatesContext;
