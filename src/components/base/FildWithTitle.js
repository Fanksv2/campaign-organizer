import React from "react";
import "../../styles/fildwithtitle.css";

const FildWithTitle = (props) => {
    const { title } = props;
    return (
        <div className="fildwithtitle">
            <h2>{title}</h2>
            <textarea>Um texto muito doido meu deus do ceu</textarea>
        </div>
    );
};

export default FildWithTitle;
