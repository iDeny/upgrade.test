import * as types from '../types/todo';
import db from '../../db';

// -------- Classic action creators --------

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

export const addTask = payload => ({
	type: types.ADD_TASK,
	payload
});


// -------- Async action creators --------

// Load tasks

export const loadTasks = () => dispatch => {
	db.table('todos')
      .toArray()
			.then((todos) => 
				dispatch({
					type: types.LOAD_TASKS,
					payload: todos
				})
			);
};

// Add a task

export const addTaskToDb = payload => dispatch => {
	console.log('payload', payload);
	const todoToAdd = { text: payload, completed: false }
	db.table('todos')
			.add(todoToAdd)
			.then((AddTask) => 
				dispatch(AddTask(payload))
			);
};