import React from "react";
import { Link } from "react-router-dom";
import BaseListLarge from "./BaseListLarge";
import LargeButton from "./LargeButton";
import "../../styles/linklist.css";

function LinkList(props) {
    const { list, chooseElement, linkedTo } = props;

    return (
        <div className="linklist">
            <div className="linklist-content">
                <BaseListLarge>
                    {list.map((element) => {
                        return (
                            <LargeButton
                                key={element._id}
                                onClick={() => {
                                    chooseElement(element);
                                }}
                                className={
                                    element._id === linkedTo
                                        ? "choosedElement"
                                        : ""
                                }
                            >
                                {element.name}
                            </LargeButton>
                        );
                    })}
                </BaseListLarge>
            </div>
        </div>
    );
}

export default LinkList;
