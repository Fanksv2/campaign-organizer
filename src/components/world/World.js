import React from "react";
import { useParams } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";
import "../../styles/world.css";
import { useSelector } from "react-redux";

const World = () => {
    const { id } = useParams();
    const { worlds } = useSelector((state) => state.worlds);
    const world = worlds.find((world) => {
        return world.id == id;
    });

    return (
        <div className="world">
            <BaseMultipleContent title={world.name}>
                <div className="world-content">
                    <FildWithTitle title="Lore" text={world.lore} />
                    <FildWithTitle
                        title="Religions and Culture"
                        text={world.religionsAndCulture}
                    />
                    <FildWithTitle title="Government" text={world.government} />
                    <FildWithTitle title="Geography" text={world.geography} />
                </div>
            </BaseMultipleContent>
        </div>
    );
};

export default World;
