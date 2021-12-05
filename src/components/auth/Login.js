import React, { useState } from "react";
import "../../styles/login.css";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../store/user/userSlice";
import { useHistory } from "react-router";
import { login } from "../../store/user/user";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginUser, setLoginUser] = useState({ login: "", password: "" });
    const history = useHistory();

    const handleChange = (e) => {
        setLoginUser({
            ...loginUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log(loginUser);
        api.post("/auth/login", loginUser)
            .then((res) => {
                let { token, user } = res.data;
                delete user.__v;
                console.log(user);
                login(token);
                history.push("/campaigns");
                window.location.reload();
            })
            .catch((err) => {
                console.log("ERRO: ", err);
            });

        e.preventDefault();
    };

    return (
        <div className="login">
            <div className="login-content-login">
                <h1>LOGIN</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>User</h2>
                        <input
                            type="text"
                            name="login"
                            onChange={handleChange}
                        ></input>
                    </div>

                    <div>
                        <h2>Password</h2>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="login-buttons-login">
                        <Link to="/register" className="register-button-login">
                            <button type="button">Register</button>
                        </Link>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
