import React, { createRef, RefObject } from 'react';
import { Component } from 'react';

interface Props {}

interface ToDo {
  title: string;
  isDone: boolean;
}

interface State {
  toDoList: ToDo[];
  remaining: number;
}

export default class ClassToDoList extends Component<Props, State> {
  private inputEl: RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      toDoList: [],
      remaining: 0,
    };
    this.inputEl = createRef();
  }

  addToDo() {
    if (this.inputEl.current?.value.trim()) {
      let newToDoList = [
        ...this.state.toDoList,
        { title: this.inputEl.current.value, isDone: false },
      ];
      this.setState({
        toDoList: newToDoList,
        remaining: newToDoList.filter((toDo) => !toDo.isDone).length,
      });
    }
    this.inputEl.current!.value = '';
  }

  toggleDone(index: number) {
    let toDoList = [...this.state.toDoList];
    let toDo = { ...toDoList[index] };
    toDo.isDone = !toDo.isDone;
    toDoList[index] = toDo;
    this.setState({
      toDoList,
      remaining: toDoList.filter((toDo) => !toDo.isDone).length,
    });
  }

  render() {
    return (
      <>
        <div>
          <h2>Todo List</h2>
          <input ref={this.inputEl} type="text" />
          <button onClick={this.addToDo.bind(this)}>Add</button>
          <h3>
            {this.state.remaining} remaining out of {this.state.toDoList.length}{' '}
            tasks
          </h3>
          <ul>
            {this.state.toDoList.map((toDo, i) => {
              return (
                <li
                  className={toDo.isDone ? 'is-done' : ''}
                  onClick={this.toggleDone.bind(this, i)}
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
}
