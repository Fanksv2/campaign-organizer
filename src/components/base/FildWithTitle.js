import React, { useState } from "react";
import "../../styles/fildwithtitle.css";

const FildWithTitle = (props) => {
    const { title, text } = props;
    const [textArea, setTextArea] = useState("");

    // const handleKeyDown = (e) => {
    //     const key = e.key;
    //     if (key === "Tab") {
    //         setTextArea(textArea + "\t");
    //         e.preventDefault();
    //     }
    // };

    // const handleChange = (e) => {
    //     const text = e.target.value;
    //     console.log(text);
    //     setTextArea(text);
    // };

    return (
        <div className="fildwithtitle">
            <h2>{title}</h2>
            <textarea /*onKeyDown={handleKeyDown} onChange={handleChange}*/>
                {text}
            </textarea>
        </div>
    );
};

export default FildWithTitle;
