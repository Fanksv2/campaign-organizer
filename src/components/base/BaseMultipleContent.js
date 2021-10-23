import React from "react";

const BaseMultipleContent = (props) => {
    const title = props.title;
    const InnerComponent = props.innerComponent;
    return (
        <div className="basemultiplecontent">
            <h1>{title}</h1>
            {InnerComponent}
        </div>
    );
};

export default BaseMultipleContent;
