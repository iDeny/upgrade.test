import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todo from './redux/reducers/todo';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { loadTasks } from './redux/actionCreators/todo';

const store = createStore(todo);
loadTasks();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
