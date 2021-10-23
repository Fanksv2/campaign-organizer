import React, { Fragment } from "react";
import "../../styles/large-button.css";
const LargeButton = (props) => {
    console.log(props);
    const InnerComponent = props.children;
    const onClickEvent = props.onClick;
    return (
        <Fragment>
            <button
                className={`largebutton ${
                    props.className ? props.className : ""
                }`}
                onClick={(e) => (onClickEvent ? onClickEvent(e) : null)}
            >
                {InnerComponent}
            </button>
        </Fragment>
    );
};

export default LargeButton;
