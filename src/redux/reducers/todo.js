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
			return {
				...state,
				todos: action.payload
			};
		}

		case types.ADD_TASK: {
			const { id, text } = action.payload;
			
			return {
				...state,
				todos: [...state.todos, {
					id,
					text,
					completed: false
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

		case types.TOGGLE_COMPLETE: {
			return {
				...state,
				todos: action.payload
			}
		}

		default: {
			return state;
		}
	}
}