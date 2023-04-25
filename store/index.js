import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: { access: '', refresh: '' },
  },
  reducers: {
    login(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token.access = '';
      state.token.refresh = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
