import { useContext, useEffect, useState } from 'react';
import { Candidate } from '../../models/candidate.model';
import CandidatesContext, {
  CandidatesContextProvider,
} from '../../store/candidates-context';
import FunctionCandidatesList from '../Candidates/CandidatesList/FunctionCandidatesList';

export default function FunctionCandidates() {
  // const [candidatesList, setCandidatesList] = useState<Candidate[]>([]);

  const ctx = useContext(CandidatesContext);
  useEffect(() => {
    ctx.handleCandidatesList([
      { name: 'John', age: 24, skill: 'JavaScript' },
      { name: 'Ana', age: 20, skill: 'Go' },
      { name: 'Jack', age: 28, skill: 'Java' },
    ]);
  }, []);

  // return <FunctionCandidatesList candidatesList={candidatesList} />;
  return <FunctionCandidatesList />;
}
