import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "../styles/header.css";

const Header = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <div className="header">
            <h1>The Lore Keeper</h1>
            <div>
                <p>{user.name}</p>
                <p>LOGOUT</p>
            </div>
        </div>
    );
};

export default Header;
