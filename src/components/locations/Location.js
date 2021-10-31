import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/location.css";
import FildWithTitle from "../base/FildWithTitle";
import SaveCancelButton from "../base/SaveCancelButton";
import { update } from "../../store/location/locationSlice";

const Location = () => {
    const { id: idStr } = useParams();
    const id = parseInt(idStr);
    const dispatch = useDispatch();

    const { locations: locationsDefault } = useSelector(
        (state) => state.locations
    );
    const locationDefault = locationsDefault.find((location) => {
        return location.id === id;
    });

    console.log(locationDefault);

    const [location, setLocation] = useState({ ...locationDefault });

    console.log(location.name);

    const handleChange = (e) => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = (e) => {
        dispatch(update({ id, location }));
    };

    return (
        <div className="location">
            <BaseMultipleContent title={location.name}>
                <div className="location-content">
                    <FildWithTitle
                        title="Surrounding Area"
                        text={location.surroundingArea}
                        name="surroundingArea"
                        handleChange={handleChange}
                    />
                    <FildWithTitle
                        title="Description"
                        text={location.description}
                        name="description"
                        handleChange={handleChange}
                    />
                </div>
            </BaseMultipleContent>
            <SaveCancelButton onClickSave={handleSave} />
        </div>
    );
};

export default Location;
