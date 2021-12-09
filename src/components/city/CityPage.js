import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, withRouter } from "react-router";
import BaseMultipleContent from "../base/BaseMultipleContent";
import FildWithTitle from "../base/FildWithTitle";
import "../../styles/citypage.css";
import SaveCancelButton from "../base/SaveCancelButton";
import { update } from "../../store/cities/citySlice";
import EditableTitle from "../base/EditableTitle";
import { createCity, updateCity } from "../../store/cities/city";
import LinkList from "../base/LinkList";
import ModalBase from "../modal/ModalBase";
import ModalLink from "../modal/ModalLink";

const CityPage = () => {
    const { id } = useParams();
    const isNew = id === "new";
    const dispatch = useDispatch();
    const { cities } = useSelector((state) => state.cities);
    let citypageDefault = cities.find((citypage) => {
        return citypage._id === id;
    });

    const { worlds } = useSelector((state) => state.worlds);

    if (isNew) {
        citypageDefault = {
            name: "",
            size: "",
            government: "",
            pointsOfInterest: "",
            npcs: "",
        };
    }

    const [citypage, setCity] = useState({ ...citypageDefault });

    const setName = (name) => {
        setCity({
            ...citypage,
            name,
        });
    };

    const setLink = (link) => {
        setCity({
            ...citypage,
            link,
        });
    };

    const handleSave = (e) => {
        if (isNew) {
            createCity(dispatch, citypage);
        } else {
            updateCity(dispatch, citypage);
        }
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
            <BaseMultipleContent
                title={
                    <EditableTitle
                        initialTitle={citypage.name}
                        setValue={setName}
                    />
                }
            >
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
                </div>
            </BaseMultipleContent>
            <div className="content-footer">
                <SaveCancelButton
                    onClickSave={handleSave}
                    comparison={comparison}
                />
                <ModalLink
                    list={worlds.map((world) => {
                        return { name: world.name, _id: world._id };
                    })}
                    setLink={setLink}
                    linkedTo={citypage.link}
                />
            </div>
        </div>
    );
};

export default withRouter(CityPage);
