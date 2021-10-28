import React from "react";
import { useParams } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";

const World = () => {
    const { id } = useParams();

    return (
        <div className="world">
            <BaseMultipleContent title="World">
                <div className="world-content">
                    <FildWithTitle title="Lore" />
                </div>
            </BaseMultipleContent>
        </div>
    );
};

export default World;
