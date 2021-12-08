import api from "../../api/api";
import { create, setCities, update } from "./citySlice";

export const getCities = async (dispatch) => {
    return await api
        .get("/city")
        .then(async (res) => {
            const { cities } = res.data;
            await dispatch(setCities(cities));
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const createCity = async (dispatch, city) => {
    return await api
        .post("/city", { city })
        .then((res) => {
            console.log(res.data);
            dispatch(create(res.data.city));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateCity = async (dispatch, city) => {
    return await api
        .put("/city", { city })
        .then((res) => {
            dispatch(update(res.data.city));
        })
        .catch((err) => {
            console.log(err);
        });
};
