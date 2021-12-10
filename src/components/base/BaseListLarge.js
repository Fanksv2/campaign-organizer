import React from "react";
import "../../styles/baselistlarge.css";

const BaseListLarge = (props) => {
    const InnerComponent = props.children;
    const { vertical } = props;
    return (
        <div
            className={
                "baselistlarge " + (vertical ? "vertical " : "horizontal")
            }
        >
            {InnerComponent}
        </div>
    );
};

export default BaseListLarge;
