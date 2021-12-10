import React from "react";
import BaseListLarge from "./BaseListLarge";
import "../../styles/baselistsmall.css";

const BaseListSmall = (props) => {
    const { children, vertical, className } = props;
    return (
        <div className={"baselistsmall " + className}>
            <BaseListLarge vertical={vertical}>{children}</BaseListLarge>
        </div>
    );
};

export default BaseListSmall;
