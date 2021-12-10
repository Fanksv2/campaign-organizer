import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/savesuccess.css";
import ModalBase from "./ModalBase";

const ModalDelete = ({ disabled, onClickDismiss, onClickDelete }) => {
    const history = useHistory();

    return (
        <div className = {"modaldelete " + (disabled ? "" : "disabled")}>
            <ModalBase
                title = "Atention!"
                footer = {
                    <div className="modalsave-footer">
                        <button className = "yesbtn"
                            onClick={() => {
                                onClickDelete();
                                onClickDismiss();
                                history.goBack();
                            }}
                        >
                            Yes
                        </button>
                        <button className = "cancelbtn"
                            onClick={() => {
                                onClickDismiss();
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                }
                // onClickVoidDismiss = {() => {
                //     onClickDismiss();
                // }}
            >
                <p>Are you sure you want to delete this item?</p>
                
            </ModalBase>
        </div>
    );
};

export default ModalDelete;
