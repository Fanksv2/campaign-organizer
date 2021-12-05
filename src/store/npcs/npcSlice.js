import { createSlice } from "@reduxjs/toolkit";

export const npcSlice = createSlice({
    name: "npcs",
    initialState: {
        npcs: [
            {
                id: 0,
                name: "Tobias Andrade",
                occupation: "Blacksmith",
                description: "Tall, dark hair and not a very talkative person",
                personality: "Straight to the point and honest",

                //Necessario linkar o local que ele se encontra, how to?
            },
            {
                id: 1,
                name: "Geraldo Piedade",
                occupation: "Town Mayor",
                description: "Medium height, a bit overweight and bald. Speaks in a very bombastic way",
                personality: "Traditional politician, ruthless yet very charismatic",
            },
            {
                id: 2,
                name: "Joelma Antonina",
                occupation: "Innkeeper",
                description: "Brown hair, freckles, always wearing an apron. Always doing something",
                personality: "Stubborn, won't take no guff from anyone, but is kind to those who have earned it",
            },
        ],
    },
    
    reducers: {
        create: (state, action) => {
            state.npcs = [...state.npcs, action.payload];
        },

        update: (state, action) => {
            const { id, npcpage } = action.payload;
            console.log(npcpage);

            for (var i in state.npcs) {
                if (state.npcs[i].id == id) {
                    console.log(state.npcs[i]);
                    state.npcs[i] = { ...npcpage };
                }
            }
        },
    }
})

export const { create, update } = npcSlice.actions;
export default npcSlice.reducer;