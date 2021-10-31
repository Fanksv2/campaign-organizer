import React, { useState } from "react";
import { useParams, withRouter } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";
import "../../styles/world.css";
import { useDispatch, useSelector } from "react-redux";
import SaveCancelButton from "../base/SaveCancelButton";
import { update } from "../../store/world/worldSlice";
import ModalBase from "../modal/ModalBase";
import ModalUnsavedChanges from "../modal/ModalUnsavedChanges";

const World = () => {
    const { id: idStr } = useParams();
    const id = parseInt(idStr);
    const dispatch = useDispatch();
    const { worlds } = useSelector((state) => state.worlds);
    const worldDefault = worlds.find((world) => {
        return world.id === id;
    });

    console.log(worldDefault);
    const [world, setWorld] = useState({ ...worldDefault });

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
        dispatch(update({ id, world }));
    };

    return (
        <div className="world">
            <BaseMultipleContent title={world.name}>
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
