import React, { useState } from "react";
import "../../styles/fildwithtitle.css";

const FildWithTitle = (props) => {
    const { title, text, handleChange, name } = props;

    const handleKeyDown = (e) => {
        const key = e.key;
        if (key === "Tab") {
            e.preventDefault();
        }
    };

    return (
        <div className="fildwithtitle">
            <h2>{title}</h2>
            <textarea
                value={text}
                name={name}
                onKeyDown={handleKeyDown}
                onChange={(e) => (handleChange ? handleChange(e) : null)}
            />
        </div>
    );
};

export default FildWithTitle;
