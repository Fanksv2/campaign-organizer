import React, { useEffect } from "react";
import FildWithTitle from "../base/FildWithTitle";
import { useSelector } from "react-redux";
import BaseListLarge from "../base/BaseListLarge";
import BaseMultipleContent from "../base/BaseMultipleContent";
import LargeButton from "../base/LargeButton";
import "../../styles/locations.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";
import { getLocations } from "../../store/location/location";
import { useDispatch } from "react-redux";
import LinkList from "../base/LinkList";

const Locations = () => {
    const { locations } = useSelector((state) => state.locations);
    const dispatch = useDispatch();

    useEffect(() => {
        getLocations(dispatch);
    }, []);

    return (
        <div className="locations">
            <BaseMultipleContent title="Locations">
                <div className="locations-content">
                    <BaseListLarge>
                        {locations.map((location) => {
                            return (
                                <Link
                                    to={`/locations/${location._id}`}
                                    key={location._id}
                                >
                                    <LargeButton>{location.name}</LargeButton>
                                </Link>
                            );
                        })}
                        <Link to="/locations/new">
                            <LargeButton className="newbutton">
                                NEW <PlusIcon />
                            </LargeButton>
                        </Link>
                    </BaseListLarge>
                </div>
            </BaseMultipleContent>
        </div>
    );
};

export default Locations;
