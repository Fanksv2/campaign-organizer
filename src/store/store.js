import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./campaign/campaignSlice";
import npcSlice from "./npcs/npcSlice";
import userSlice from "./user/userSlice";
import worldSlice from "./world/worldSlice";
import locationSlice from "./location/locationSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        campaigns: campaignSlice,
        worlds: worldSlice,
        npcs: npcSlice,
        locations: locationSlice,
    },
});
