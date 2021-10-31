import React from "react";
import FildWithTitle from "../base/FildWithTitle";
import { useSelector } from "react-redux";
import BaseListLarge from "../base/BaseListLarge";
import BaseMultipleContent from "../base/BaseMultipleContent";
import LargeButton from "../base/LargeButton";
import "../../styles/locations.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";

const Locations = () => {
    const { locations } = useSelector((state) => state.locations);

    return (
        <div className="locations">
            <BaseMultipleContent title="Locations">
                <div className="locations-content">
                    <BaseListLarge>
                        {locations.map((location) => {
                            return (
                                <Link
                                    to={`/locations/${location.id}`}
                                    key={location.id}
                                >
                                    <LargeButton>{location.name}</LargeButton>
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

export default Locations;
