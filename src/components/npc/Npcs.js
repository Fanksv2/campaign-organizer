import React from "react";
import BaseMultipleContent from "../base/BaseMultipleContent";
import BaseListLarge from "../base/BaseListLarge";
import { useSelector } from "react-redux";
import LargeButton from "../base/LargeButton";
import npcSlice from "../../store/npcs/npcSlice";
import "../../styles/npcs.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";


const Npcs = () => {
    const {npcs} = useSelector(state => state.npcs);

    return (<div className="npcs">
        <BaseMultipleContent title = "NPCs">
            <div className = "npcs-content">
                <BaseListLarge>
                    {npcs.map((npcs) => {
                        return (<LargeButton key={npcs.id}> 
                            {npcs.name}
                        </LargeButton>);
                    })
                   
                    }
                    <LargeButton className = "newbutton">
                        NEW <PlusIcon></PlusIcon>
                    </LargeButton>
                    
                </BaseListLarge>
            </div>
        </BaseMultipleContent>
    
    </div>);
};

export default Npcs;
