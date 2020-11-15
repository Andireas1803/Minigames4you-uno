import { combineReducers, Reducer } from 'redux';
import userSlice from './store/userSlice';

export default function createRootReducer(): Reducer {
	return combineReducers({
		user: userSlice
	});
}
