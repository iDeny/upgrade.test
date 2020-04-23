import * as types from '../types/todo';

// -------- Default state of the branch --------

const defaultState = {
	placeholder: 'Add a task',
  todos: [],
  taskInput: ''
};

// -------- Reducer --------

export default function(state = defaultState, action) {
	switch (action.type) {

		case types.LOAD_TASKS: {
			console.log('load', action.payload);
			return {
				...state,
				todos: action.payload
			};
		}

		case types.ADD_TASK: {
			console.log('action', action.payload);
			return {
				...state,
				todos: [...state.todos, {
					completed: false,
					id: state.todos.length,
					text: action.payload
				}],
				taskInput: ''
			};
		}

		case types.CHANGE_INPUT: {
			const { 
					target: { 
						value 
					}
			} = action.payload;

			return {
				...state,
				taskInput: value
			}
		}

		case types.CHANGE_CHECKBOX: {
			const { 
				target: { 
					name 
				}
			} = action.payload;

			const newTodos = Object.assign([], state.todos);
    	let itemToModify = newTodos.find(todo => todo.id === +name);
			itemToModify.completed = !itemToModify.completed;
			
			return {
				...state,
				todos: newTodos
			}
		}

		default: {
			return state;
		}
	}
}