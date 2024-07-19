import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, userName: "panneer" },
    { id: 2, userName: "selvam" },
    { id: 3, userName: "krishna" },
];

const usersSlice = createSlice({
    name: "userSliceaName",
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
