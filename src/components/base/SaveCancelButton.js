import React, { useState } from "react";
import { withRouter } from "react-router";
import "../../styles/savecancelbutton.css";
import ModalUnsavedChanges from "../modal/ModalUnsavedChanges";

const SaveCancelButton = (props) => {
    const { onClickCancel, onClickSave, comparison } = props;
    const [modalActive, setModalActive] = useState(false);

    const handleCancel = (e) => {
        console.log(comparison);
        if (JSON.stringify(comparison.old) !== JSON.stringify(comparison.new)) {
            setModalActive(true);
        }
    };

    return (
        <div className="savecancelbutton">
            <button
                className={"cancel"}
                onClick={(e) =>
                    onClickCancel ? onClickCancel(e) : handleCancel(e)
                }
            >
                Cancel
            </button>
            <button
                className={"save"}
                onClick={() => {
                    return onClickSave ? onClickSave() : null;
                }}
            >
                Save
            </button>
            <ModalUnsavedChanges
                disabled={modalActive}
                onClickSave={() => {
                    setModalActive(false);
                    return onClickSave ? onClickSave() : null;
                }}
                onClickCancel={() => {
                    props.history.goBack();
                    setModalActive(false);
                }}
            />
        </div>
    );
};

export default withRouter(SaveCancelButton);
