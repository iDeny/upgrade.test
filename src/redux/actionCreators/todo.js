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

// Toggle complete status

export const toggleComplete = payload => ({
	type: types.TOGGLE_COMPLETE,
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
			.add(todoToAdd, id)
			.then((id) => 
				dispatch(addTask(Object.assign({}, todoToAdd, { id })))
			);
};

// Toggle complete status in the database

export const toggleCompleteInDb = ({ target: { name }}) => async dispatch => {
	let targetId = +name;
	let itemCompleteStatus;
	await db.todos.get(targetId, (item) => {
		itemCompleteStatus = item.completed;
	});

  db.todos
    .update(targetId, { completed: !itemCompleteStatus })
    .then((updated) => 
			db.todos.toArray()
			.then((newTodos) => 
				dispatch(toggleComplete(newTodos)))
		);
};

{};