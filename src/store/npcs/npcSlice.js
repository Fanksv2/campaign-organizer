import { createSlice } from "@reduxjs/toolkit";

export const npcSlice = createSlice({
    name: "npcs",
    initialState: {
        npcs: [
            {
                id: 0,
                name: "Tobias Andrade",
            },
            {
                id: 1,
                name: "Geraldo Piedade",
            },
            {
                id: 2,
                name: "Joelma Antonina",
            },
        ],
    },
    
    reducers: {
        create: (state, action) => {
            state.npcs = [...state.npcs, action.payload];
        },
    }
})

export const { create } = npcSlice.actions;
export default npcSlice.reducer;