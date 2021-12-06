import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Campaigns from "./components/campaign/Campaigns";
import Cities from "./components/city/Cities";
import CityPage from "./components/city/CityPage";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Locations from "./components/locations/Locations";
import Npcs from "./components/npc/Npcs";
import SideBar from "./components/SideBar";
import World from "./components/world/World";
import Worlds from "./components/world/Worlds";
import { Redirect, Switch } from "react-router";
import Location from "./components/locations/Location";
import NpcPage from "./components/npc/NpcPage";
import Register from "./components/auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { getCampaigns } from "./store/campaign/campaign";
import { setCampaignChoosed } from "./store/campaign/campaignSlice";
import { setLocations } from "./store/location/locationSlice";
import { setWorlds } from "./store/world/worldSlice";
import Login from "./components/auth/Login";
function App() {
    const { user } = useSelector((state) => state.user);
    const { campaignChoosed } = useSelector((state) => state.campaigns);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        async function refreshCampaign() {
            //Used for keep the choosed campaign after refresh page
            const campaignId = localStorage.getItem("@thelorekeeper-campaign");
            if (campaignId) {
                const campaigns = await getCampaigns(dispatch);
                if (!campaigns) {
                    return;
                }
                const campaign = campaigns.find(
                    (campaign) => campaignId === campaign._id
                );
                if (campaign) {
                    dispatch(setCampaignChoosed(true));
                    dispatch(setLocations(campaign.content.locations));
                    dispatch(setWorlds(campaign.content.worlds));
                }
            }
        }

        refreshCampaign();
    }, []);

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Switch>
                    <div className="app-middle">
                        {!user.isAuthenticated ? (
                            <Fragment>
                                <Route component={Login} exact path="/login" />
                                <Route
                                    component={Register}
                                    exact
                                    path="/register"
                                />
                            </Fragment>
                        ) : null}
                        {user.isAuthenticated ? (
                            <Fragment>
                                <SideBar />
                                <div className="app-content">
                                    <Switch>
                                        <Route
                                            component={Campaigns}
                                            exact
                                            path="/campaigns"
                                        />
                                        {!campaignChoosed ? (
                                            <Redirect to="/campaigns" />
                                        ) : null}
                                        <Route
                                            component={Campaigns}
                                            exact
                                            path="/"
                                        />
                                        <Route
                                            component={Dashboard}
                                            exact
                                            path="/dashboard"
                                        />
                                        <Route
                                            component={Worlds}
                                            exact
                                            path="/worlds"
                                        />
                                        <Route
                                            component={Cities}
                                            exact
                                            path="/cities"
                                        />
                                        <Route
                                            component={Locations}
                                            exact
                                            path="/locations"
                                        />
                                        <Route
                                            component={Npcs}
                                            exact
                                            path="/npcs"
                                        />
                                        <Route
                                            component={World}
                                            path="/worlds/:id"
                                        />
                                        <Route
                                            component={Location}
                                            path="/locations/:id"
                                        />
                                        <Route
                                            component={CityPage}
                                            path="/cities/:id"
                                        />
                                        <Route
                                            component={NpcPage}
                                            path="/npcs/:id"
                                        />
                                    </Switch>
                                </div>
                            </Fragment>
                        ) : null}{" "}
                    </div>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
