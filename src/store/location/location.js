import api from "../../api/api";
import { create, setLocations, update, destroy } from "../location/locationSlice";

export const getLocations = async (dispatch) => {
    return await api
        .get("/location")
        .then(async (res) => {
            const { locations } = res.data;
            await dispatch(setLocations(locations));
            return locations;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const createLocation = async (dispatch, location) => {
    return await api
        .post("/location", { location })
        .then((res) => {
            console.log(res.data.location);
            dispatch(create(res.data.location));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateLocation = async (dispatch, location) => {
    return await api
        .put("/location", { location })
        .then((res) => {
            dispatch(update(res.data.location));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deleteLocation = async (dispatch, location) => {
    return await api
        .delete("/location", { data: {location} })
        .then((res) => {
            dispatch(destroy(res.data.location));
        })
        .catch((err) => {
            console.log(err);
        })
}

