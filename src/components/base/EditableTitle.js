import React, { useState } from "react";
import "../../styles/editabletitle.css";

const EditableTitle = (props) => {

    const {initialTitle, setValue} = props;
    
    // console.log(initialTitle);

    const [title, setTitle] = useState(initialTitle);

    const handleChange = (e) =>{
        setTitle(e.target.value);
        setValue(e.target.value);
    }

    return (
        <div >
            {/* TODO: receber um input, handleChange e um state 
            fanks: de onde estamos puxando os titulos? Onde vamos salvar essas informações?*/}
            <input id = "titleInput" onChange = {(e) => handleChange(e)} value = {title}>
                
            </input>
        </div>
    )
}


export default EditableTitle
