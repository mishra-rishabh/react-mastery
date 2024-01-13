/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal++;
        },
        decrement: (state, action) => {
            state.counterVal--;
        },
        addition: (state, action) => {
            // state.counterVal += Number(action.payload.number);
            // or
            state.counterVal += Number(action.payload);
        },
        subtraction: (state, action) => {
            state.counterVal -= Number(action.payload.number);
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice;