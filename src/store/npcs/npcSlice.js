import { createSlice } from "@reduxjs/toolkit";

export const npcSlice = createSlice({
    name: "npcs",
    initialState: {
        npcs: [
            // {
            //     id: 0,
            //     name: "Tobias Andrade",
            //     occupation: "Blacksmith",
            //     description: "Tall, dark hair and not a very talkative person",
            //     personality: "Straight to the point and honest",
            //     //Necessario linkar o local que ele se encontra, how to?
            // },
            // {
            //     id: 1,
            //     name: "Geraldo Piedade",
            //     occupation: "Town Mayor",
            //     description:
            //         "Medium height, a bit overweight and bald. Speaks in a very bombastic way",
            //     personality:
            //         "Traditional politician, ruthless yet very charismatic",
            // },
            // {
            //     id: 2,
            //     name: "Joelma Antonina",
            //     occupation: "Innkeeper",
            //     description:
            //         "Brown hair, freckles, always wearing an apron. Always doing something",
            //     personality:
            //         "Stubborn, won't take no guff from anyone, but is kind to those who have earned it",
            // },
        ],
    },

    reducers: {
        create: (state, action) => {
            state.npcs = [...state.npcs, action.payload];
            console.log(state.npcs);
        },

        update: (state, action) => {
            const npcpage = action.payload;
            const { _id } = npcpage;
            console.log(npcpage);

            for (var i in state.npcs) {
                if (state.npcs[i]._id == _id) {
                    console.log(state.npcs[i]);
                    state.npcs[i] = { ...npcpage };
                }
            }
        },
        setNpcs: (state, action) => {
            state.npcs = action.payload;
            console.log(state.npcs);
        },
    },
});

export const { create, update, setNpcs } = npcSlice.actions;
export default npcSlice.reducer;
