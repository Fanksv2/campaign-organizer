import React, { Component } from "react";
import { useSelector } from "react-redux";
import { change } from "../store/user/userSlice";
import { useDispatch } from "react-redux";

const Home = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="home">
            <h1> Name: {user.name} </h1>
            <h1> Name: {user.age} </h1>
        </div>
    );
};

export default Home;
