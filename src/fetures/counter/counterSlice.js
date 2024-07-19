import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stateCount: 0,
};

export const counterSlice = createSlice({
    name: "counterName",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.stateCount += 1;
        },
        decrement: (state) => {
            state.stateCount -= 1;
        },
        reset: (state) => {
            state.stateCount = 0;
        },
        incrementByAmount: (state, action) => {
            state.stateCount += action.payload;
        },
    },
});

export const { increment, decrement, reset, incrementByAmount } =
    counterSlice.actions;
export default counterSlice.reducer;
