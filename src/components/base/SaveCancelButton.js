import React from "react";
import { withRouter } from "react-router";
import "../../styles/savecancelbutton.css";

const SaveCancelButton = (props) => {
    const { onClickCancel, onClickSave } = props;
    return (
        <div className="savecancelbutton">
            <button
                className="cancel"
                onClick={(e) =>
                    onClickCancel ? onClickCancel(e) : props.history.goBack()
                }
            >
                Cancel
            </button>
            <button
                className="save"
                onClick={(e) => (onClickSave ? onClickSave(e) : null)}
            >
                Save
            </button>
        </div>
    );
};

export default withRouter(SaveCancelButton);
