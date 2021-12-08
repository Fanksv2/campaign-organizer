import React from "react";
import BaseListLarge from "../base/BaseListLarge";
import BaseMultipleContent from "../base/BaseMultipleContent";
import LargeButton from "../base/LargeButton";
import "../../styles/dashboard.css";

const Dashboard = (props) => {
    return (
        <div className="dashboard">
            <BaseMultipleContent title="Dashboard">
                <div className="dashboard-content"></div>
            </BaseMultipleContent>
        </div>
    );
};

export default Dashboard;
