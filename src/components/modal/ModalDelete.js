import React from "react";
import "../../styles/savesuccess.css";
import ModalBase from "./ModalBase";

const ModalDelete = ({ disabled, onClickDismiss, footer }) => {

    return (
        <div className = {"modaldelete " + (disabled ? "" : "disabled")}>
            <ModalBase
                title = "Atention!"
                footer = {
                    <div className="modalsave-footer">
                        <button className = "yesbtn"
                            onClick={() => {
                                onClickDismiss();
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
