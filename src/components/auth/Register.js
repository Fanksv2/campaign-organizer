import React, { useState } from "react";
import "../../styles/register.css";
import api from "../../api/api";
import { useHistory } from "react-router";

const Register = () => {
    const [user, setUser] = useState({
        login: "",
        password: "",
        name: "",
        confirmPassword: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        console.log(user);
        api.post("/auth/register", user)
            .then((res) => {
                history.push("/login");
            })
            .catch((err) => {
                console.log("ERRO: ", err);
            });

        e.preventDefault();
    };

    return (
        <div className="login">
            <div className="login-content">
                <h1>REGISTER</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Name</h2>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                        ></input>
                    </div>
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
                    <div>
                        <h2>Confirm Password</h2>
                        <input
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="login-buttons">
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
