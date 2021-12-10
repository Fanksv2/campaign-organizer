import api from "../../api/api";
import { setNpcs, update, create, destroy } from "./npcSlice";

export const getNpcs = async (dispatch) => {
    return await api
        .get("/npc")
        .then(async (res) => {
            const { npcs } = res.data;
            await dispatch(setNpcs(npcs));
            return npcs;
        })
        .catch((err) => {
            console.log(err);
        });
};

export const createNpc = async (dispatch, npc) => {
    return await api
        .post("/npc", { npc })
        .then((res) => {
            console.log(res.data.npc);
            dispatch(create(res.data.npc));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateNpc = async (dispatch, npc) => {
    return await api
        .put("/npc", { npc })
        .then((res) => {
            console.log(res.data);
            dispatch(update(res.data.npc));
        })
        .catch((err) => {
            console.log(err);
        });
};

export const deleteNpc = async (dispatch, npc) => {
    return await api
        .delete("/npc", { data: {npc} })
        .then((res) => {
            console.log(res.data.npc);
            dispatch(destroy(res.data.npc));
        })
        .catch((err) => {
            console.log(err);
        })
}

