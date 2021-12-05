import { useDispatch } from "react-redux";
import api from "../../api/api";
import { change } from "./userSlice";
export const TOKEN_KEY = "@thelorekeeper-Token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const getUser = async (dispatch) => {
    return await api
        .get("/user")
        .then((res) => {
            dispatch(change({ ...res.data }));
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
};
