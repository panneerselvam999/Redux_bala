import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, userName: "panneer" },
    { id: 2, userName: "selvam" },
    { id: 3, userName: "krishna" },
    { id: 4, userName: "Zahir" },
];

const usersSlice = createSlice({
    name: "userSliceaName",
    initialState,
    reducers: {},
});

export default usersSlice.reducer;
