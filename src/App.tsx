import './App.css';
import ClassAutoComplete from './components/AutoComplete/ClassAutoComplete';
import FunctionAutoComplete from './components/AutoComplete/FunctionAutoComplete';
import ClassCounter from './components/Counter/ClassCounter';
import FunctionCounter from './components/Counter/FunctionCounter';
import ClassToDoList from './components/ToDoList/ClassToDoList';
import FunctionToDoList from './components/ToDoList/FunctionToDoList';

function App() {
  return (
    <div className="App">
      {/* <div>
        <ClassCounter />
        <FunctionCounter />
      </div>
      <div>
        <ClassToDoList />
        <FunctionToDoList />
      </div> */}
      <div>
        {/* <FunctionAutoComplete /> */}
        <ClassAutoComplete />
      </div>
    </div>
  );
}

export default App;
