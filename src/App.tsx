import './App.css';
import ClassAutoComplete from './components/AutoComplete/ClassAutoComplete';
import FunctionAutoComplete from './components/AutoComplete/FunctionAutoComplete';
import ClassCounter from './components/Counter/ClassCounter';
import FunctionCounter from './components/Counter/FunctionCounter';
import ClassHero from './components/Hero/ClassHero';
import FunctionHero from './components/Hero/FunctionHero';
import ClassToDoList from './components/ToDoList/ClassToDoList';
import FunctionToDoList from './components/ToDoList/FunctionToDoList';

function App() {
  return (
    <FunctionHero>
      <div>
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
      </div>
    </FunctionHero>
  );
}

export default App;
