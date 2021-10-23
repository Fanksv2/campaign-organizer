import React from "react";
import "../../styles/baselistlarge.css";

const BaseListLarge = (props) => {
    const InnerComponent = props.children;
    return <div className="baselistlarge">{InnerComponent}</div>;
};

export default BaseListLarge;
