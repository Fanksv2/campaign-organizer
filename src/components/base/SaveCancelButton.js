import React, { useState } from "react";
import { withRouter } from "react-router";
import "../../styles/savecancelbutton.css";
import ModalDelete from "../modal/ModalDelete";
import ModalSaved from "../modal/ModalSaved";
import ModalUnsavedChanges from "../modal/ModalUnsavedChanges";


const SaveCancelButton = (props) => {
    const { onClickCancel, onClickSave, onClickDelete, comparison } = props;
    const [modalActive, setModalActive] = useState(false);
    const [modalSavedActive, setModalSavedActive] = useState(false);
    const [modalDeleteActive, setModalDeleteActive] = useState(false);

    const handleCancel = (e) => {
        console.log(comparison);
        if (JSON.stringify(comparison.old) !== JSON.stringify(comparison.new)) {
            setModalActive(true);
        } else {
            props.history.goBack();
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
                onClick={(e) => {
                    setModalSavedActive(true);
                    return onClickSave ? onClickSave() : null;
                }}
            >
                Save
            </button>
            <button
                className={"delete"}
                onClick={(e) => {
                    //Add coisas
                    setModalDeleteActive(true); 
                    //return onClickDelete ? onClickDelete() : null;
                }}
            >
                Delete
            </button>
            <ModalUnsavedChanges
                disabled={modalActive}
                onClickSave={(e) => {
                    setModalActive(false);
                    setModalSavedActive(true);                
                    return onClickSave ? onClickSave() : null;
                }}
                onClickCancel={(e) => {
                    props.history.goBack();
                    setModalActive(false);
                }}
            />
            <ModalSaved 
                disabled={modalSavedActive}
                onClickDismiss={() => {
                    setModalSavedActive(false);
                }}
            />
            <ModalDelete
                disabled={modalDeleteActive}
                onClickDelete={() => {
                    setModalDeleteActive(false);
                    return onClickDelete ? onClickDelete() : null;
                }}
                onClickDismiss={() => {
                    setModalDeleteActive(false);
                }}
            />
        </div>
    );
};

export default withRouter(SaveCancelButton);
