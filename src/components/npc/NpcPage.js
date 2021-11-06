import React, { useState } from "react";
import { useParams, withRouter } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";
import "../../styles/npcpage.css";
import { useDispatch, useSelector } from "react-redux";
import SaveCancelButton from "../base/SaveCancelButton";
import { update } from "../../store/npcs/npcSlice";
import ModalBase from "../modal/ModalBase";
import ModalUnsavedChanges from "../modal/ModalUnsavedChanges";

//Esta será a página que terá os detalhes de um determinado NPC
const NpcPage = () => {
    const { id: idStr } = useParams();
    const id = parseInt(idStr);
    const dispatch = useDispatch();
    const { npcs } = useSelector((state) => state.npcs);
    const npcpageDefault = npcs.find((npcpage) => {
        return npcpage.id === id;
    });

    console.log(npcpageDefault);
    const [npcpage, setNpc] = useState({ ...npcpageDefault });

    const handleSave = (e) => {
        dispatch(update({ id, npcpage }));
    };

    const handleChange = (e) => {
        setNpc({
            ...npcpage,
            [e.target.name]: e.target.value,
        });
    };
    
    const comparison = {
        old: npcpageDefault,
        new: npcpage,
    }

    return ( 
        <div className = "npcpage">
            <BaseMultipleContent title = {npcpage.name}>

                <div className = "npcpage-content">
                    <FildWithTitle
                        title = "Occupation"
                        text = {npcpage.occupation}
                        name = "occupation"
                        handleChange = {handleChange}
                    >
                    </FildWithTitle>

                    <FildWithTitle
                        title = "Description"
                        text = {npcpage.description}
                        name = "description"
                        handleChange = {handleChange}
                    >
                    </FildWithTitle>

                    <FildWithTitle
                        title = "Personality"
                        text = {npcpage.personality}
                        name = "personality"
                        handleChange = {handleChange}
                    >
                    </FildWithTitle>
                </div>


            </BaseMultipleContent>
            <SaveCancelButton onClickSave={handleSave} comparison={comparison}/>
        </div>
    );
};

export default withRouter(NpcPage);
