import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "locations",
    initialState: {
        locations: [
            {
                id: 0,
                name: "A Dungeon do Mamaco",
                surroundingArea: "Fazendas e Mineradoras",
                description: "Ruinas de uma mina exaurida antiga",
                // encounters
            },
            {
                id: 1,
                name: "A sala do trono",
                surroundingArea:
                    "Localizado dentro do castelo perdido do drácula",
                description:
                    "Brilho dourado de riquezas até onde os olhos podem enxergar",
                // encounters
            },
            {
                id: 2,
                name: "A casa do mago",
                surroundingArea: "Campo verde florido",
                description: "Casa embutida em uma grande árvore",
                // encounters
            },
        ],
    },
    reducers: {
        create: (state, action) => {
            state.locations = [...state.locations, action];
        },
        update: (state, action) => {
            const { id, location } = action.payload;

            for (var i in state.locations) {
                if (state.locations[i].id === id) {
                    console.log(state.locations[i]);
                    state.locations[i] = { ...location };
                }
            }
        },
    },
});

export const { create, update } = locationSlice.actions;
export default locationSlice.reducer;
