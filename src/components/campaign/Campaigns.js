import React, { useEffect, useState } from "react";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/campaigns.css";
import LargeButton from "../base/LargeButton";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import BaseListLarge from "../base/BaseListLarge";
import { getCampaigns } from "../../store/campaign/campaign";
import { setCampaignChoosed } from "../../store/campaign/campaignSlice";

const Campaigns = () => {
    const { campaigns, campaignChoosed } = useSelector(
        (state) => state.campaigns
    );
    const dispatch = useDispatch();

    useEffect(() => {
        getCampaigns(dispatch);
    }, []);

    const handleClick = (id) => {
        localStorage.setItem("@thelorekeeper-campaign", id);
        dispatch(setCampaignChoosed(true));
        console.log(campaignChoosed);
    };

    return (
        <div className="campaigns">
            <BaseMultipleContent title="Campaigns">
                <div className="campaigns-content">
                    <BaseListLarge>
                        {campaigns.map((campaign) => {
                            return (
                                <LargeButton
                                    key={campaign._id}
                                    onClick={() => handleClick(campaign._id)}
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
