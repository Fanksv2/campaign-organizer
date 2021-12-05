import { createSlice } from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
    name: "campaigns",
    initialState: {
        campaignChoosed: false,
        campaigns: [],
    },
    reducers: {
        setCampaigns: (state, action) => {
            state.campaigns = action.payload;
        },
        setCampaignChoosed: (state, action) => {
            state.campaignChoosed = action.payload;
        },
    },
});

export const { setCampaigns, setCampaignChoosed } = campaignSlice.actions;
export default campaignSlice.reducer;
