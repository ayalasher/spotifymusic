import { configureStore, createSlice } from "@reduxjs/toolkit";

// Creating a slice for the user data
const userdataslice = createSlice({
  name: "userdata",
  initialState: {},
  reducers: {
    updateuserdata: (state, action) => {
      return action.payload; //replacing the state with a new user object...
    },
  },
});

// Export actions
// The funtions described in the reducer...
export const { updateuserdata } = userdataslice.actions;

// Creaitng the store
const store = configureStore({
  // userdata - name of the data object being worked on
  // userdataslice - The name of the slice created
  reducer: { userdata: userdataslice.reducer },
});

export default store;
