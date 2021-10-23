import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app-middle">
                <SideBar />
                <div className="app-content">
                    <BrowserRouter>
                        <Route component={Home} exact path="/" />
                    </BrowserRouter>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
