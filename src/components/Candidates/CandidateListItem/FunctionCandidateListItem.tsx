import { Candidate } from '../../../models/candidate.model';

interface Props {
  candidate: Candidate;
}

export default function FunctionCandidateListItem(props: Props) {
  const { name, age, skill } = props.candidate;

  return (
    <li>
      Name: {name}, Age: {age}, Skill: {skill}
    </li>
  );
}
