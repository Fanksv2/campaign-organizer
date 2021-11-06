import React from "react";
import BaseListLarge from "../base/BaseListLarge";
import BaseMultipleContent from "../base/BaseMultipleContent";
import { useSelector } from "react-redux";
import LargeButton from "../base/LargeButton";
import citySlice from "../../store/cities/citySlice";
import "../../styles/cities.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { Link } from "react-router-dom";

const Cities = () => {
    const {cities} = useSelector(state => state.cities);

    return (<div className="cities">
        <BaseMultipleContent title = "cities">
            <div className = "cities-content">
                <BaseListLarge>
                    {cities.map((citypage) => {
                        return (
                            <Link to={`/cities/${citypage.id}`} key={citypage.id}>
                                <LargeButton > {citypage.name}</LargeButton>
                            </Link>
                        );

                        })
                    }
                    <LargeButton className = "newbutton">
                        NEW <PlusIcon></PlusIcon>
                    </LargeButton>
                </BaseListLarge>
            </div>
        </BaseMultipleContent>
    
    
    </div>
    );
};

export default Cities;
