import { createSlice } from "@reduxjs/toolkit";

export const worldSlice = createSlice({
    name: "worlds",
    initialState: {
        worlds: [
            {
                name: "Forgotten Realms",
                lore: "Um reino muito maluquinho de altas confusões",
                religionsAndCulture: "Zecapagodinho",
                government: "Belo e suas estruturas de poder",
                geography: "Montanhas de doces",
            },
            {
                name: "Terra",
                lore: "Big bang dps: ....",
                religionsAndCulture: "Carnaval",
                government: "Eua domina é nós",
                geography: "Maior parte de agua xD",
            },
            {
                name: "Marte",
                lore: "¯'\\_(ツ)_/¯",
                religionsAndCulture: "Macaco",
                government: "Viva marte",
                geography: "Areia é nois",
            },
        ],
    },
    reducers: {
        create: (state, action) => {
            state.worlds = [...state.worlds, action.payload];
        },
    },
});

export const { create } = worldSlice.actions;
export default worldSlice.reducer;
