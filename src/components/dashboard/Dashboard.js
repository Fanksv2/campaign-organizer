import React, { useEffect, useState } from "react";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/dashboard.css";
import BaseListSmall from "../base/BaseListSmall";
import DashboardElement from "../base/DashboardElement";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setWorldChoosed } from "../../store/world/worldSlice";
import { setCitiesLinked, setCityChoosed } from "../../store/cities/citySlice";
import {
    setLocationChoosed,
    setLocationsLinked,
} from "../../store/location/locationSlice";
import { setNpcsLinked } from "../../store/npcs/npcSlice";

const Dashboard = (props) => {
    const { worlds } = useSelector((state) => state.worlds);
    const { cities } = useSelector((state) => state.cities);
    const { locations } = useSelector((state) => state.locations);
    const { npcs } = useSelector((state) => state.npcs);
    const history = useHistory();
    const dispatch = useDispatch();

    // const [worldChoosed, setWorldChoosed] = useState("");
    // const [cityChoosed, setCityChoosed] = useState("");
    // const [locationChoosed, setLocationChoosed] = useState("");

    const { worldChoosed } = useSelector((state) => state.worlds);
    const { cityChoosed } = useSelector((state) => state.cities);
    const { locationChoosed } = useSelector((state) => state.locations);

    // const [citiesLinked, setCitiesLinked] = useState([]);
    // const [locationsLinked, setLocationsLinked] = useState([]);
    // const [npcsLinked, setNpcsLinked] = useState([]);

    const { citiesLinked } = useSelector((state) => state.cities);
    const { locationsLinked } = useSelector((state) => state.locations);
    const { npcsLinked } = useSelector((state) => state.npcs);

    const onClickWorld = (_id) => {
        dispatch(setWorldChoosed(_id));
        dispatch(
            setCitiesLinked(
                cities.filter((city) => {
                    return city.link === _id;
                })
            )
        );

        dispatch(setLocationsLinked([]));
        dispatch(setNpcsLinked([]));
    };

    const onClickCity = (_id) => {
        dispatch(setCityChoosed(_id));
        dispatch(
            setLocationsLinked(
                locations.filter((location) => {
                    return location.link === _id;
                })
            )
        );

        dispatch(setNpcsLinked([]));
    };

    const onClickLocation = (_id) => {
        dispatch(setLocationChoosed(_id));
        dispatch(
            setNpcsLinked(
                npcs.filter((npc) => {
                    return npc.link === _id;
                })
            )
        );
    };

    return (
        <div className="dashboard">
            <BaseMultipleContent title="Dashboard">
                <div className="dashboard-content">
                    <BaseListSmall
                        vertical={false}
                        className="dashboard-worlds"
                    >
                        <p>Worlds</p>
                        {worlds.map((world) => {
                            return (
                                <DashboardElement
                                    key={world._id}
                                    onClickArrow={() => {
                                        history.push(`/worlds/${world._id}`);
                                    }}
                                    onClickElement={() =>
                                        onClickWorld(world._id)
                                    }
                                    className={
                                        world._id === worldChoosed
                                            ? "choosed"
                                            : ""
                                    }
                                >
                                    {world.name}
                                </DashboardElement>
                            );
                        })}
                    </BaseListSmall>
                    <BaseListSmall vertical={true} className="dashboard-cities">
                        <p>Cities</p>
                        {citiesLinked.map((city) => {
                            return (
                                <DashboardElement
                                    key={city._id}
                                    onClickArrow={() => {
                                        history.push(`/cities/${city._id}`);
                                    }}
                                    onClickElement={() => onClickCity(city._id)}
                                    className={
                                        city._id === cityChoosed
                                            ? "choosed"
                                            : ""
                                    }
                                >
                                    {city.name}
                                </DashboardElement>
                            );
                        })}
                    </BaseListSmall>
                    <BaseListSmall
                        vertical={true}
                        className="dashboard-locations"
                    >
                        <p>Locations</p>
                        {locationsLinked.map((location) => {
                            return (
                                <DashboardElement
                                    key={location._id}
                                    onClickArrow={() => {
                                        history.push(
                                            `/locations/${location._id}`
                                        );
                                    }}
                                    onClickElement={() =>
                                        onClickLocation(location._id)
                                    }
                                    className={
                                        location._id === locationChoosed
                                            ? "choosed"
                                            : ""
                                    }
                                >
                                    {location.name}
                                </DashboardElement>
                            );
                        })}
                    </BaseListSmall>
                    <BaseListSmall vertical={true} className="dashboard-npcs">
                        <p>Npcs</p>
                        {npcsLinked.map((npc) => {
                            return (
                                <DashboardElement
                                    key={npc._id}
                                    onClickArrow={() => {
                                        history.push(`/npcs/${npc._id}`);
                                    }}
                                >
                                    {npc.name}
                                </DashboardElement>
                            );
                        })}
                    </BaseListSmall>
                </div>
            </BaseMultipleContent>
        </div>
    );
};

export default Dashboard;
