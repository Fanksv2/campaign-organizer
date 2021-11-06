import React from "react";
import "../../styles/basemultiplecontent.css";

const BaseMultipleContent = (props) => {
    const title = props.title; //maybe passar um componente aqui, que serviria pra editar o nome/titulo passado
    const InnerComponent = props.children;
    return (
        <div className="basemultiplecontent">
            <h1>{title}</h1>
            <div className="child">{InnerComponent}</div>
        </div>
    );
};

export default BaseMultipleContent;
