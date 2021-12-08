import React, { useState } from "react";
import { useParams, withRouter } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";
import "../../styles/world.css";
import { useDispatch, useSelector } from "react-redux";
import SaveCancelButton from "../base/SaveCancelButton";
import { update } from "../../store/world/worldSlice";
import { createWorld, updateWorld } from "../../store/world/world";
import EditableTitle from "../base/EditableTitle";

const World = () => {
    const { id } = useParams();
    const isNew = id === "new";
    const dispatch = useDispatch();
    const { worlds } = useSelector((state) => state.worlds);
    let worldDefault = worlds.find((world) => {
        return world._id === id;
    });

    if (isNew) {
        worldDefault = {
            name: "",
            lore: "",
            religionsAndCulture: "",
            government: "",
            geography: "",
        };
    }

    const [world, setWorld] = useState({ ...worldDefault });

    const setName = (name) => {
        setWorld({
            ...world,
            name,
        });
    };

    const comparison = {
        old: worldDefault,
        new: world,
    };

    const handleChange = (e) => {
        setWorld({
            ...world,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        if (isNew) {
            createWorld(dispatch, world);
        } else {
            updateWorld(dispatch, world);
        }
    };

    return (
        <div className="world">
            <BaseMultipleContent
                title={
                    <EditableTitle
                        initialTitle={world.name}
                        setValue={setName}
                    />
                }
            >
                <div className="world-content">
                    <FildWithTitle
                        title="Lore"
                        text={world.lore}
                        name="lore"
                        handleChange={handleChange}
                    />
                    <FildWithTitle
                        title="Religions and Culture"
                        text={world.religionsAndCulture}
                        name="religionsAndCulture"
                        handleChange={handleChange}
                    />
                    <FildWithTitle
                        title="Government"
                        text={world.government}
                        name="government"
                        handleChange={handleChange}
                    />
                    <FildWithTitle
                        title="Geography"
                        text={world.geography}
                        name="geography"
                        handleChange={handleChange}
                    />
                </div>
            </BaseMultipleContent>
            <SaveCancelButton
                onClickSave={handleSave}
                comparison={comparison}
            />
        </div>
    );
};

export default withRouter(World);
