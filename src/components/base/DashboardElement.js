import React from "react";
import LargeButton from "./LargeButton";
import "../../styles/dashboardelement.css";
import { GiArrowhead } from "react-icons/gi";

const DashboardElement = (props) => {
    const { children, onClickArrow, onClickElement, className } = props;
    return (
        <div className={"dashboardelement " + className}>
            <LargeButton
                onClick={(e) => {
                    if (onClickElement) {
                        onClickElement();
                    }
                }}
            >
                {children}
            </LargeButton>
            <GiArrowhead className="arrow" onClick={onClickArrow} />
        </div>
    );
};

export default DashboardElement;
