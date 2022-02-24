import { useRef, useState } from 'react';

interface ToDo {
  title: string;
  isDone: boolean;
}

export default function FunctionToDoList() {
  const [toDoList, setToDoList] = useState<ToDo[]>([]);
  const [remaining, setRemaining] = useState(0);
  const inputEl = useRef<HTMLInputElement>(null);

  function handleAddToDo() {
    if (inputEl.current?.value.trim()) {
      let newToDoList = [
        ...toDoList,
        { title: inputEl.current.value, isDone: false },
      ];
      setToDoList(newToDoList);
      setRemaining(newToDoList.filter((toDo) => !toDo.isDone).length);
    }
    inputEl.current!.value = '';
  }

  function handleToggleDone(index: number) {
    let newToDoList = [...toDoList];
    let toDo = { ...newToDoList[index] };
    toDo.isDone = !toDo.isDone;
    newToDoList[index] = toDo;
    setToDoList(newToDoList);
    setRemaining(newToDoList.filter((toDo) => !toDo.isDone).length);
  }

  return (
    <>
      <div>
        <h2>Function Todo List</h2>
        <input ref={inputEl} type="text" />
        <button onClick={handleAddToDo}>Add</button>
        <h3>
          {remaining} remaining out of {toDoList.length} tasks
        </h3>
        <ul>
          {toDoList.map((toDo, i) => {
            return (
              <li
                className={toDo.isDone ? 'is-done' : ''}
                onClick={() => handleToggleDone(i)}
              >
                {toDo.title}
              </li>
            );
          })}
        </ul>
      </div>
      <style>{`
                  .is-done {
                      text-decoration: line-through;
                  }
              `}</style>
    </>
  );
}
