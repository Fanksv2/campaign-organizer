import React, { useEffect, useState } from "react";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/campaigns.css";
import LargeButton from "../base/LargeButton";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import BaseListLarge from "../base/BaseListLarge";
import { createCampaign, getCampaigns } from "../../store/campaign/campaign";
import { setCampaignChoosed } from "../../store/campaign/campaignSlice";
import EditableTitle from "../base/EditableTitle";
import { useHistory } from "react-router";
import api from "../../api/api";

const Campaigns = ({ refreshCampaign }) => {
    const { campaigns, campaignChoosed } = useSelector(
        (state) => state.campaigns
    );
    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        getCampaigns(dispatch);
    }, []);

    const [editCampaignName, setEditCampaignName] = useState(false);

    const [name, setName] = useState("");

    const handleClick = (id) => {
        localStorage.setItem("@thelorekeeper-campaign", id);
        api.defaults.headers.common["Campaign"] = id;
        console.log(api.defaults.headers);
        refreshCampaign(id);
        history.go(0);
    };

    const handleNew = () => {
        setEditCampaignName(true);
        console.log(campaigns);
    };

    const onEnterPress = () => {
        createCampaign(dispatch, name);
        setEditCampaignName(false);
        setName("");
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
                        {!editCampaignName ? (
                            <LargeButton
                                className="newbutton"
                                onClick={() => handleNew()}
                            >
                                NEW <PlusIcon />
                            </LargeButton>
                        ) : (
                            <EditableTitle
                                initialTitle={""}
                                setValue={setName}
                                onEnterPress={onEnterPress}
                            />
                        )}
                    </BaseListLarge>
                </div>
            </BaseMultipleContent>
        </div>
    );
};

export default Campaigns;
