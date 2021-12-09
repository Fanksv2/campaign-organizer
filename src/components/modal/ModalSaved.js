import React from "react";
import "../../styles/savesuccess.css";
import ModalBase from "./ModalBase";

const ModalSaved = ({ disabled, onClickDismiss, footer }) => {

    return (
        <div className = {"modalsave " + (disabled ? "" : "disabled")}>
            <ModalBase
                title = "Save Success"
                footer = {
                    <div className="modalsave-footer">
                        <button className = "okbtn"
                            onClick={() => {
                                onClickDismiss();
                            }}
                        >
                            OK
                        </button>
                    </div>
                }
                onClickVoidDismiss = {() => {
                    onClickDismiss();
                }}
            >
                <p>Your changes have been saved!</p>
                
            </ModalBase>
        </div>

        // <div className="modalsave">
        //     <div className="modalbase-container">
        //         <div className="modalbase-header">
        //             <h1>Save Success</h1>
        //         </div>
        //         <div className="modalbase-body">
        //             <p>Your changes have been saved!</p>
        //         </div>
        //         <div className="modalsave-footer">
        //             <button className = "okbtn"
        //                 onClick={() => {
        //                     onClickDismiss();
        //                  }}
        //             >
        //                     OK
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ModalSaved;
