import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";
import "../../styles/citypage.css";
import SaveCancelButton from "../base/SaveCancelButton";
import { update } from "../../store/cities/citySlice";

const CityPage = () => {
    const { id: idStr } = useParams();
    const id = parseInt(idStr);
    const dispatch = useDispatch();
    const { cities } = useSelector((state) => state.cities);
    const citypageDefault = cities.find((citypage) => {
        return citypage.id === id;
    });

    console.log(citypageDefault);
    const [citypage, setCity] = useState({ ...citypageDefault });

    console.log(citypage);

    const handleSave = (e) => {
        dispatch(update({ id, citypage }));
    };

    const handleChange = (e) => {
        setCity({
            ...citypage,
            [e.target.name]: e.target.value,
        });
    };

    const comparison = {
        old: citypageDefault,
        new: citypage,
    };

    return (
        <div className="citypage">
            <BaseMultipleContent title={citypage.name}>
                <div className="citypage-content">
                    <FildWithTitle
                        title="Size"
                        text={citypage.size}
                        name="size"
                        handleChange={handleChange}
                    ></FildWithTitle>

                    <FildWithTitle
                        title="Government"
                        text={citypage.government}
                        name="government"
                        handleChange={handleChange}
                    ></FildWithTitle>

                    <FildWithTitle
                        title="Points of Interest"
                        text={citypage.pointsOfInterest}
                        name="pointsOfInterest"
                        handleChange={handleChange}
                    ></FildWithTitle>

                    <FildWithTitle
                        title="NPCs in this location"
                        text={citypage.npcs}
                        name="npcs"
                        handleChange={handleChange}
                    ></FildWithTitle>
                </div>
            </BaseMultipleContent>
            <SaveCancelButton
                onClickSave={handleSave}
                comparison={comparison}
            />
        </div>
    );
};

export default withRouter(CityPage);
