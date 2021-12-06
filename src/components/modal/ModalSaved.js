import React from "react";
import "../../styles/savesuccess.css";
import ModalBase from "./ModalBase";

const ModalSaved = ({ title, children, footer }) => {

    return (
        <div className="savesuccess">
            <ModalBase title = "Save Success">
                <p>Saved successfully!</p>
            </ModalBase> 
        </div>
    );
};

export default ModalSaved;
