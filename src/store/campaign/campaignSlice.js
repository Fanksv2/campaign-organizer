import { createSlice } from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
    name: "campaigns",
    initialState: {
        campaigns: [
            {
                id: 0,
                name: "O REI LOUCO",
            },
            {
                id: 1,
                name: "DRAGÃO DOURADO",
            },
            {
                id: 2,
                name: "O PORÃO DO GIGANTE",
            },
        ],
    },
    reducers: {
        create: (state, action) => {
            state.campaigns = [...state.campaigns, action.payload];
        },
    },
});

export const { create } = campaignSlice.actions;
export default campaignSlice.reducer;
