import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import "../../styles/location.css";
import FildWithTitle from "../base/FildWithTitle";
import SaveCancelButton from "../base/SaveCancelButton";
import { createLocation, updateLocation } from "../../store/location/location";
import EditableTitle from "../base/EditableTitle";

const Location = () => {
    const { id } = useParams();
    const isNew = id === "new";

    const dispatch = useDispatch();

    const { locations: locationsDefault } = useSelector(
        (state) => state.locations
    );
    let locationDefault = locationsDefault.find((location) => {
        return location._id === id;
    });

    if (isNew) {
        locationDefault = {
            name: "NEW",
            surroundingArea: "",
            description: "",
        };
    }

    const [location, setLocation] = useState({ ...locationDefault });

    const setName = (name) => {
        setLocation({
            ...location,
            name,
        });
    };

    const handleChange = (e) => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = (e) => {
        if (isNew) {
            createLocation(dispatch, location);
        } else {
            updateLocation(dispatch, location);
        }
    };

    return (
        <div className="location">
            <BaseMultipleContent title={<EditableTitle initialTitle = {location.name} setValue = {setName}/>}>
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
            <SaveCancelButton
                onClickSave={handleSave}
                comparison={{ old: locationDefault, new: location }}
            />
        </div>
    );
};

export default Location;
