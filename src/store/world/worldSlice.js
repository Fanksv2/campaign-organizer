import { createSlice } from "@reduxjs/toolkit";

export const worldSlice = createSlice({
    name: "worlds",
    initialState: {
        worlds: [
            {
                id: 0,
                name: "Forgotten Realms",
                lore: "Um reino com muitos segredos e aventuras",
                religionsAndCulture:
                    "Existem diversas religiões sem predominancia. Também, a cultura e os costumes são especificos de cada cidade",
                government: "Rei e Feudos",
                geography:
                    "Planicies ao cento, com florestas ao norte e mar ao sul.",
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
