import React from "react";
import "../../styles/modalbase.css";

const ModalBase = ({ title, children, footer }) => {
    return (
        <div className="modalbase">
            <div className="modalbase-container">
                <div className="modalbase-header">
                    <h1>{title}</h1>
                </div>
                <div className="modalbase-body">{children}</div>
                <div className="modalbase-footer">{footer}</div>
            </div>
        </div>
    );
};

export default ModalBase;
