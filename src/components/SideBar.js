import React from "react";
import "../styles/sidebar.css";
import { ReactComponent as WorldIcon } from "../assets/icons/world.svg";
import { ReactComponent as VillageIcon } from "../assets/icons/village.svg";
import { ReactComponent as NpcsIcon } from "../assets/icons/npcs.svg";
import { ReactComponent as D20Icon } from "../assets/icons/d20.svg";
import { ReactComponent as CompassIcon } from "../assets/icons/compass.svg";
import { ReactComponent as CampingIcon } from "../assets/icons/camping.svg";
import { ReactComponent as DashboardIcon } from "../assets/icons/swords.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = (props) => {
    const [currentPage, setCurrentPage] = useState("dashboard");
    const active = "active";

    const handleClick = (e) => {
        setCurrentPage(e.target.id);
        console.log(e.target.id);
    };

    return (
        <div className="sidebar">
            <Link
                to="/dashboard"
                id="dashboard"
                onClick={(e) => handleClick(e)}
            >
                <DashboardIcon
                    className={`${currentPage === "dashboard" ? active : ""} `}
                />
            </Link>
            <Link
                to="/campaigns"
                id="campaigns"
                onClick={(e) => handleClick(e)}
            >
                <CampingIcon
                    className={`${currentPage === "campaigns" ? active : ""}`}
                />
            </Link>
            <Link to="/worlds" id="worlds" onClick={(e) => handleClick(e)}>
                <WorldIcon
                    className={`${currentPage === "worlds" ? active : ""}`}
                />
            </Link>
            <Link to="/cities" id="cities" onClick={(e) => handleClick(e)}>
                <VillageIcon
                    className={`${currentPage === "cities" ? active : ""}`}
                />
            </Link>
            <Link
                to="/locations"
                id="locations"
                onClick={(e) => handleClick(e)}
            >
                <CompassIcon
                    className={`${currentPage === "locations" ? active : ""}`}
                />
            </Link>
            <Link to="/npcs" id="npcs" onClick={(e) => handleClick(e)}>
                <NpcsIcon
                    className={`${currentPage === "npcs" ? active : ""}`}
                />
            </Link>
            <Link
                to="/dashboard"
                id="dashboard"
                onClick={(e) => handleClick(e)}
            >
                <D20Icon
                    className={`${currentPage === "dashboard" ? active : ""}`}
                />
            </Link>
        </div>
    );
};

export default SideBar;
