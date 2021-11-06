import React from "react";
import BaseMultipleContent from "../base/BaseMultipleContent";
import BaseListLarge from "../base/BaseListLarge";
import { useSelector } from "react-redux";
import LargeButton from "../base/LargeButton";
import "../../styles/npcs.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";


const Npcs = () => {
    const {npcs} = useSelector(state => state.npcs);


    //Erros dentro 'do Link to', pq??????????: 'npcpage' is not defined  no-undef
    return (<div className="npcs">
        <BaseMultipleContent title = "NPCs">
            <div className = "npcs-content">
                <BaseListLarge>
                    {npcs.map((npcpage) => {   
                        return (
                            <Link to={`/npcs/${npcpage.id}`} key={npcpage.id}>
                                <LargeButton > {npcpage.name}</LargeButton>
                            </Link>
                        );
                            
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
