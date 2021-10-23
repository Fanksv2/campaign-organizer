import { configureStore } from "@reduxjs/toolkit";
import campaignSlice from "./campaign/campaignSlice";
import userSlice from "./user/userSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        campaigns: campaignSlice,
    },
});
