import React from 'react';
import { TaskList, NewTask } from './components';
import { connect } from 'react-redux';

// Action creators

import {
  changeCheckbox,
  changeInput,
	addTaskToDb
} from './redux/actionCreators/todo';

// ------------

const mapState = state => ({
    placeholder: state.placeholder, 
    taskInput: state.taskInput, 
    todos: state.todos 
});

const mapDispatch = {
  changeCheckbox,
  changeInput,
  addTaskToDb
};

function App(props) {

  const { changeCheckbox, changeInput, addTaskToDb, placeholder, taskInput, todos } = props;

  return (
    <div className="App">
        <div className="todo">
          <div className="todo_new-task">
            <NewTask taskInput={taskInput} placeholder={placeholder} onChange={changeInput} onAdd={() => addTaskToDb(taskInput)} />
          </div>
          <div className="todo_task-list">
            <TaskList onCheckboxChange={changeCheckbox} todos={todos} />
          </div>
        </div>
    </div>
  );
}

export default connect(mapState, mapDispatch)(App);
