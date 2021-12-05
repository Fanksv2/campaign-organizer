import api from "../../api/api";
import { setLocations } from "../location/locationSlice";
import { setWorlds } from "../world/worldSlice";
import { setCampaigns } from "./campaignSlice";

export const getCampaigns = async (dispatch) => {
    return await api
        .get("/campaign")
        .then(async (res) => {
            const { campaigns } = res.data;
            await dispatch(setCampaigns(campaigns));
            return campaigns;
        })
        .catch((err) => {
            console.log(err);
        });
};
