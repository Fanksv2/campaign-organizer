import { createSlice } from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
    name: "campaigns",
    initialState: {
        campaigns: [
            {
                id: 0,
                name: "A TRAVESSIA DE SAPOPEMA",
            },
            {
                id: 1,
                name: "ABRACADABRA",
            },
            {
                id: 2,
                name: "O OLHO DO MARCAOLHO",
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
