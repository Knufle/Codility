import { useContext } from 'react';
import { Candidate } from '../../../models/candidate.model';
import CandidatesContext from '../../../store/candidates-context';
import FunctionCandidateListItem from '../../Candidates/CandidateListItem/FunctionCandidateListItem';

interface Props {
  // candidatesList: Candidate[];
}

export default function FunctionCandidatesList(props: Props) {
  const ctx = useContext(CandidatesContext);
  return (
    <ul>
      {/* {props.candidatesList.map((candidate, i) => (
        <FunctionCandidateListItem key={i} candidate={candidate} />
      ))} */}
      {ctx.candidatesList.map((candidate, i) => (
        <FunctionCandidateListItem key={i} candidate={candidate} />
      ))}
    </ul>
  );
}
