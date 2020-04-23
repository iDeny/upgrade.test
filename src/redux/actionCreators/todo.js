import * as types from '../types/todo';
import db from '../../db';

// -------- Classic action creators --------

// Load tasks

export const loadTasks = payload => ({
	type: types.LOAD_TASKS,
	payload
})

// Add a task

export const addTask = payload => ({
	type: types.ADD_TASK,
	payload
});

// Change input value

export const changeInput = payload => ({
	type: types.CHANGE_INPUT,
	payload
});

// Change checkbox state

export const changeCheckbox = payload => ({
	type: types.CHANGE_CHECKBOX,
	payload
});

// -------- Async action creators --------

// Load tasks from the database

export const loadTasksFromDb = () => dispatch => {
	db.table('todos')
      .toArray()
			.then((todos) => 
				dispatch(loadTasks(todos))
			);
};

// Add a task to the database

export const addTaskToDb = (id, text) => dispatch => {
	const todoToAdd = { id, text, completed: false };

	db.table('todos')
			.add(todoToAdd)
			.then((id) =>
				dispatch(addTask(Object.assign({}, todoToAdd, { id })))
			);
};

// Edit task's checkbox state in the database
// const { 
// 	target: { 
// 		name 
// 	}
// } = action.payload;
// console.log('state', state.todos);
// const newTodos = Object.assign([], state.todos);
// let itemToModify = newTodos.find(todo => todo.id === +name);
// itemToModify.completed = !itemToModify.completed;


export const changeCheckboxInDb = ({ target: { name }}) => async dispatch => {

		let itemToModify;
		await db.todos.toArray().then((res) => itemToModify = Object.assign([], res).find(todo => todo.id === +name));

    db.table('todos')
      .update(name, { completed: true })
      .then(() => {
				db.todos.toArray().then((res) => dispatch(changeCheckbox(res)))
			});
  };