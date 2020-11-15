import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { User } from '../models/User';

type SliceState = {
	user: User | null;
};

const initialState: SliceState = {
	user: null
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, payload: PayloadAction<User>) => {
			state.user = payload.payload;
		}
	}
});

// export const {setTheme} = counterSlice.actions;

export default userSlice.reducer;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectUser = (state: RootState) => state.user.user;
