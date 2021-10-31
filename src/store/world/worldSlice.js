import { createSlice } from "@reduxjs/toolkit";

export const worldSlice = createSlice({
    name: "worlds",
    initialState: {
        worlds: [
            {
                id: 0,
                name: "Forgotten Realms",
                lore: "Um reino muito maluquinho de altas confusões",
                religionsAndCulture: "Zecapagodinho",
                government: "Belo e suas estruturas de poder",
                geography: "Montanhas de doces",
            },
            {
                id: 1,
                name: "TERRA",
                lore: "Big bang dps: ....",
                religionsAndCulture: "Carnaval",
                government: "Eua domina é nós",
                geography: "Maior parte de agua xD",
            },
            {
                id: 2,
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
        update: (state, action) => {
            const { id, world } = action.payload;
            console.log(world);

            for (var i in state.worlds) {
                if (state.worlds[i].id === id) {
                    console.log(state.worlds[i]);
                    state.worlds[i] = { ...world };
                }
            }
        },
    },
});

export const { create, update } = worldSlice.actions;
export default worldSlice.reducer;
