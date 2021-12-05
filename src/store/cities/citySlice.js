import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
    name: "cities",
    
    initialState: {
        cities: [
            {
                id: 0,
                name: "Whiterun",
                size: "150 people",
                government: "Monarchy: Ruled by Jarl Balgruuf",
                pointsOfInterest: "TEMPORARY, NOT SUPPOSED TO BE LIKE THIS",
                npcs: "TEMPORARY, NOT SUPPOSED TO BE LIKE THIS",
            },
            {
                id: 1,
                name: "Novigrad",
                size: "780 people",
                government: "Monarchy: Ruled by King Radovid",
                pointsOfInterest: "TEMPORARY, NOT SUPPOSED TO BE LIKE THIS",
                npcs: "TEMPORARY, NOT SUPPOSED TO BE LIKE THIS",
            },
            {
                id: 2,
                name: "Pindamonhangaba",
                size: "15000 people",
                government: "Democracy: Ruled by Leopoldo Ferreira",
                pointsOfInterest: "TEMPORARY, NOT SUPPOSED TO BE LIKE THIS",
                npcs: "TEMPORARY, NOT SUPPOSED TO BE LIKE THIS",
            },
        ],
    },

    reducers: {
        create: (state, action) => {
            state.cities = [...state.cities, action.payload];
        },

        update: (state, action) => {
            const { id, citypage } = action.payload;
            console.log(citypage);

            for (var i in state.cities) {
                if (state.cities[i].id == id) {
                    console.log(state.cities[i]);
                    state.cities[i] = { ...citypage };
                }
            }
        },
    }

})

export const { create, update } = citySlice.actions;
export default citySlice.reducer;