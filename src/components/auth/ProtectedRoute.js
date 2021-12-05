import React, { useState, useEffect, Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../../store/user/user";

export const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

    useEffect(() => {
        setIsAuthenticated(!!getToken());
    });

    if (isAuthenticated) {
        return <Fragment>{children}</Fragment>;
    } else {
        return (
            <Redirect
                to={{
                    pathname: "/login",
                }}
            />
        );
    }
};
