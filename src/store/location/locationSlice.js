import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "locations",
    initialState: {
        locations: [],
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
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
    },
});

export const { create, update, setLocations } = locationSlice.actions;
export default locationSlice.reducer;
