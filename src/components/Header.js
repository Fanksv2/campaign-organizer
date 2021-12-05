import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getToken, getUser, logout } from "../store/user/user";
import { change, refresh } from "../store/user/userSlice";
import "../styles/header.css";

const Header = () => {
    const { user } = useSelector((state) => state.user);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        getUser(dispatch);
    }, []);

    const handleLogout = (e) => {
        logout();
        history.push("/login");
        window.location.reload();
    };

    return (
        <div className="header">
            <h1>The Lore Keeper</h1>
            <div>
                {user.isAuthenticated ? (
                    <Fragment>
                        <p>{user ? user.name : ""}</p>
                        <button onClick={handleLogout}>LOGOUT</button>
                    </Fragment>
                ) : null}
            </div>
        </div>
    );
};

export default Header;
