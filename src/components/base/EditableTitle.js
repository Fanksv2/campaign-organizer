import React, { useState } from "react";
import "../../styles/editabletitle.css";

const EditableTitle = (props) => {

    const {initialTitle, setValue, onEnterPress} = props;

    const [title, setTitle] = useState(initialTitle);

    const handleChange = (e) =>{
        setTitle(e.target.value);
        setValue(e.target.value);
    }

    return (
        <div className = "editabletitle">
            <input id = "titleInput" placeholder = "Edit Title Here..." autocomplete="off" onChange = {(e) => handleChange(e)} value = {title} onKeyUp = {(e) => {
                if(e.key === "Enter"){
                    if(onEnterPress){
                        onEnterPress();
                    }
                }
            }}
            >
            </input>
        </div>
    )
}


export default EditableTitle
