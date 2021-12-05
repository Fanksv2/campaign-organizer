import axios from "axios";
import { getToken, TOKEN_KEY } from "../store/user/user";

const api = axios.create({
    baseURL: "http://localhost:3030",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("@thelorekeeper-Token")}`,
        Campaign: localStorage.getItem("@thelorekeeper-campaign"),
    },
});

export default api;
