import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "locations",
    initialState: {
        locations: [],
    },
    reducers: {
        create: (state, action) => {
            state.locations = [...state.locations, action.payload];
            console.log(state.locations);
        },
        update: (state, action) => {
            const location = action.payload;
            const { _id: id } = location;

            for (var i in state.locations) {
                if (state.locations[i]._id === id) {
                    state.locations[i] = { ...location };
                }
            }
        },

        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        
        destroy: (state, action) => {
            state.locations = state.locations.filter((item) => item._id !== action.payload._id);
        },
    },
});

export const { create, update, setLocations, destroy } = locationSlice.actions;
export default locationSlice.reducer;
