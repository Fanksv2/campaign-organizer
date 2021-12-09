import React, { useState } from "react";
import LinkList from "../base/LinkList";
import ModalBase from "./ModalBase";
import "../../styles/modallink.css";

const ModalLink = (props) => {
    const { list, setLink, linkedTo } = props;

    const [disabled, setDisabled] = useState(false);

    const chooseElement = ({ _id }) => {
        setLink(_id);
    };

    return (
        <div className="modallink-content">
            <button
                onClick={() => {
                    setDisabled(true);
                }}
            >
                Link
            </button>
            <div className={"modallink " + (disabled ? "" : "disabled")}>
                <ModalBase
                    title="Link"
                    footer={
                        <div className="modallink-footer">
                            <button
                                className="modallink-ok-button"
                                onClick={() => {
                                    setDisabled(false);
                                }}
                            >
                                OK
                            </button>
                        </div>
                    }
                >
                    <LinkList
                        list={list}
                        chooseElement={chooseElement}
                        linkedTo={linkedTo}
                    />
                </ModalBase>
            </div>
        </div>
    );
};

export default ModalLink;
