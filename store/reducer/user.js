import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  address: '',
  isConnected: false,
};
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    userUpdate(state, action) {
      if (!state.isConnected) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        ...action.payload,
      };
    },
    userLogout() {
      return initialState;
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.user,
        };
      },
    },
  },
});
const { actions, reducer } = user;
export const { userLogin, userLogout, userUpdate } = actions;
export default reducer;
