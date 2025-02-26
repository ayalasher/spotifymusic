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

// Creating a slice for the token data
const accesstokendataslice = createSlice({
  name: "accestokendata",
  initialState: {},
  reducers: {
    updateaccesstokendata: (state, action) => {
      return action.payload;
    },
  },
});

// Creating a slice for the album data...
const albumdataslice = createSlice({
  name: "albumdata",
  initialState: {},
  reducers: {
    updatealbumdata: (state, action) => {
      return action.payload;
    },
  },
});

// Export actions
// The funtions described in the reducer...
export const { updateuserdata } = userdataslice.actions;
export const { updateaccesstokendata } = accesstokendataslice.actions;
export const { updatealbumdata } = albumdataslice.actions;

// Creaitng the store
const store = configureStore({
  // userdata - name of the data object being worked on
  // userdataslice - The name of the slice created
  reducer: {
    userdata: userdataslice.reducer,
    accestokendata: accesstokendataslice.reducer,
    albumdata: albumdataslice.reducer,
  },
});

//  export const accesstokenstore = configureStore({
//   reducer : {accestokendata:accesstokendataslice.reducer}
// })

export default store;
