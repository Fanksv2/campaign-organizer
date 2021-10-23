import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "Jeff",
            age: 20,
        },
    },
    reducers: {
        change: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { change } = userSlice.actions;
export default userSlice.reducer;
