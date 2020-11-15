import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './pages/App';
import createRootReducer from './rootReducer';

const rootReducer = createRootReducer();
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
