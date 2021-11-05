import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Campaigns from "./components/campaign/Campaigns";
import Cities from "./components/city/Cities";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Locations from "./components/locations/Locations";
import Npcs from "./components/npc/Npcs";
import SideBar from "./components/SideBar";
import World from "./components/world/World";
import Worlds from "./components/world/Worlds";
import { Switch } from "react-router";
import Location from "./components/locations/Location";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <div className="app-middle">
                    <SideBar />
                    <div className="app-content">
                        <Switch>
                            <Route component={Home} exact path="/" />
                            <Route
                                component={Dashboard}
                                exact
                                path="/dashboard"
                            />
                            <Route
                                component={Campaigns}
                                exact
                                path="/campaigns"
                            />
                            <Route component={Worlds} exact path="/worlds" />
                            <Route component={Cities} exact path="/cities" />
                            <Route
                                component={Locations}
                                exact
                                path="/locations"
                            />
                            <Route component={Npcs} exact path="/npcs" />
                            <Route component={World} path="/worlds/:id" />
                            <Route component={Location} path="/locations/:id" />
                        </Switch>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
