import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "./user";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            _id: "a",
            name: "s",
            isAuthenticated: false,
        },
    },
    reducers: {
        change: (state, action) => {
            state.user = { ...action.payload, isAuthenticated: !!getToken() };
        },
        refresh: (state) => {
            // getUser().then((user) => {
            //     if (user) {
            //         state.user = { _id: user._id, name: user.name };
            //     }
            //     console.log(state.user);
            // });
        },
    },
});

export const { change, refresh } = userSlice.actions;
export default userSlice.reducer;
