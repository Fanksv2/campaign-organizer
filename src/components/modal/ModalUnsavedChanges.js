import React, { Fragment } from "react";
import ModalBase from "./ModalBase";

const ModalUnsavedChanges = ({ disabled, onClickSave, onClickCancel }) => {
    const footer = (
        <div className="unsavedchanges-buttons">
            <button
                className="cancel"
                onClick={(e) => {
                    onClickCancel();
                    e.stopPropagation();
                }}
            >
                Exit without save
            </button>
            <button
                className="save"
                onClick={(e) => {
                    onClickSave();
                    e.stopPropagation();
                }}
            >
                Save
            </button>
        </div>
    );

    return (
        <div className={"unsavedchanges " + (disabled ? "" : "disabled")}>
            <ModalBase title="Unsaved Changes" footer={footer}>
                <p>There are some unsaved changes. Do you want to save them?</p>
            </ModalBase>
        </div>
    );
};

export default ModalUnsavedChanges;
