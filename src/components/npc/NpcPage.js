import React, { useState } from "react";
import { useParams, withRouter } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";
import "../../styles/npcpage.css";
import { useDispatch, useSelector } from "react-redux";
import SaveCancelButton from "../base/SaveCancelButton";
import { createNpc, deleteNpc, updateNpc } from "../../store/npcs/npc";
import EditableTitle from "../base/EditableTitle";
import ModalLink from "../modal/ModalLink";
import { setLocations } from "../../store/location/locationSlice";
import { setNpcs } from "../../store/npcs/npcSlice";

//Esta será a página que terá os detalhes de um determinado NPC
const NpcPage = () => {
    const { id } = useParams();
    const isNew = id === "new";

    const { locations } = useSelector((state) => state.locations);

    const dispatch = useDispatch();
    const { npcs } = useSelector((state) => state.npcs);
    let npcpageDefault = npcs.find((npcpage) => {
        return npcpage._id === id;
    });

    if (isNew) {
        npcpageDefault = {
            name: "",
            occupation: "",
            description: "",
            personality: "",
        };
    }

    const [npcpage, setNpc] = useState({ ...npcpageDefault });

    const setName = (name) => {
        setNpc({
            ...npcpage,
            name,
        });
    };

    const setLink = (link) => {
        setNpc({
            ...npcpage,
            link,
        });
    };

    const handleSave = (e) => {
        console.log(npcpage);
        if (isNew) {
            createNpc(dispatch, npcpage);
        } else {
            updateNpc(dispatch, npcpage);
        }
    };

    const handleChange = (e) => {
        setNpc({
            ...npcpage,
            [e.target.name]: e.target.value,
        });
    };

    const handleDelete = () => {
        deleteNpc(dispatch, npcpage);
    };

    const comparison = {
        old: npcpageDefault,
        new: npcpage,
    };

    return (
        <div className="npcpage">
            <BaseMultipleContent
                title={
                    <EditableTitle
                        initialTitle={npcpage.name}
                        setValue={setName}
                    />
                }
            >
                <div className="npcpage-content">
                    <FildWithTitle
                        title="Occupation"
                        text={npcpage.occupation}
                        name="occupation"
                        handleChange={handleChange}
                    ></FildWithTitle>

                    <FildWithTitle
                        title="Description"
                        text={npcpage.description}
                        name="description"
                        handleChange={handleChange}
                    ></FildWithTitle>

                    <FildWithTitle
                        title="Personality"
                        text={npcpage.personality}
                        name="personality"
                        handleChange={handleChange}
                    ></FildWithTitle>
                </div>
            </BaseMultipleContent>
            <div className="content-footer">
                <SaveCancelButton
                    onClickSave={handleSave}
                    onClickDelete={handleDelete}
                    comparison={comparison}
                />
                <ModalLink
                    list={locations.map((location) => {
                        return { name: location.name, _id: location._id };
                    })}
                    setLink={setLink}
                    linkedTo={npcpage.link}
                />
            </div>
        </div>
    );
};

export default withRouter(NpcPage);
