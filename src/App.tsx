import './App.css';
import ClassAutoComplete from './components/AutoComplete/ClassAutoComplete';
import FunctionAutoComplete from './components/AutoComplete/FunctionAutoComplete';
import FunctionCandidates from './components/Candidates/FunctionCandidates';
import ClassCounter from './components/Counter/ClassCounter';
import FunctionCounter from './components/Counter/FunctionCounter';
import ClassHero from './components/Hero/ClassHero';
import FunctionHero from './components/Hero/FunctionHero';
import ClassToDoList from './components/ToDoList/ClassToDoList';
import FunctionToDoList from './components/ToDoList/FunctionToDoList';
import { CandidatesContextProvider } from './store/candidates-context';

function App() {
  return (
    <FunctionHero>
      {/* <div>
        <ClassCounter />
        <FunctionCounter />
      </div>
      <div>
        <ClassToDoList />
        <FunctionToDoList />
      </div>
      <div>
        <ClassAutoComplete />
        <FunctionAutoComplete />
      </div> */}
      <CandidatesContextProvider>
        <FunctionCandidates />
      </CandidatesContextProvider>
    </FunctionHero>
  );
}

export default App;
