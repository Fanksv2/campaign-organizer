import api from "../../api/api";
import { create, setWorlds, update } from "./worldSlice";

export const getWorlds = async (dispatch) => {
    return await api
        .get("/world")
        .then(async (res) => {
            const { worlds } = res.data;
            await dispatch(setWorlds(worlds));
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const createWorld = async (dispatch, world) => {
    return await api
        .post("/world", { world })
        .then((res) => {
            console.log(res.data);
            dispatch(create(res.data.world));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateWorld = async (dispatch, world) => {
    return await api
        .put("/world", { world })
        .then((res) => {
            dispatch(update(res.data.world));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deleteWorld = async (dispatch, world) => {
    return await api
        .delete("/world", { world })
        .then((res) => {
            //adicionar o que vai acontecer
            dispatch(delete(res.data.world));
        })
        .catch((err) => {
            console.log(err);
        })
}
