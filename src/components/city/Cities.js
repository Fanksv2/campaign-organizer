import React from "react";
import BaseListLarge from "../base/BaseListLarge";
import BaseMultipleContent from "../base/BaseMultipleContent";
import { useSelector } from "react-redux";
import LargeButton from "../base/LargeButton";
import citySlice from "../../store/cities/citySlice";
import "../../styles/cities.css";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";

const Cities = () => {
    const {cities} = useSelector(state => state.cities);

    return (<div className="cities">
        <BaseMultipleContent title = "cities">
            <div className = "cities-content">
                <BaseListLarge>
                    {cities.map((cities) => {
                        return (<LargeButton key={cities.id}> 
                            {cities.name}
                        </LargeButton>);
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
