import React from "react";
import BaseListLarge from "../base/BaseListLarge";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/worlds.css";
import LargeButton from "../base/LargeButton";
import { useSelector } from "react-redux";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";

const Worlds = () => {
    const { worlds } = useSelector((state) => state.worlds);

    return (
        <div className="worlds">
            <BaseMultipleContent title="Worlds">
                <div className="worlds-content">
                    <BaseListLarge>
                        {worlds.map((world) => {
                            return (
                                <Link to={`/worlds/${world.id}`} key={world.id}>
                                    <LargeButton>{world.name}</LargeButton>
                                </Link>
                            );
                        })}
                        <LargeButton className="newbutton">
                            NEW <PlusIcon />
                        </LargeButton>
                    </BaseListLarge>
                </div>
            </BaseMultipleContent>
        </div>
    );
};

export default Worlds;
