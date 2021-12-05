import { useState } from "react";
import { TOKEN_KEY } from "../store/user/user";

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem(TOKEN_KEY);
        return tokenString;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem(TOKEN_KEY, userToken);
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token,
        getToken,
    };
}
