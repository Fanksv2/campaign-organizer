import React, { useState } from "react";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/campaigns.css";
import LargeButton from "../base/LargeButton";
import { useSelector } from "react-redux";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import BaseListLarge from "../base/BaseListLarge";

const Campaigns = () => {
    const { campaigns } = useSelector((state) => state.campaigns);
    console.log(campaigns);
    const handleClick = (e) => {
        console.log(e);
    };

    return (
        <div className="campaigns">
            <BaseMultipleContent title="Campaigns">
                <div className="campaigns-content">
                    <BaseListLarge>
                        {campaigns.map((campaign) => {
                            return (
                                <LargeButton
                                    key={campaign.id}
                                    onClick={handleClick}
                                >
                                    {campaign.name}
                                </LargeButton>
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

export default Campaigns;
