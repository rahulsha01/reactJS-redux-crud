import React ,{useContext} from "react";
import {AppContext} from './ContextDataPassing';


export const ChildComponent = () => {
    const {userName} = useContext(AppContext);
    return (
        <div>
            Current Username is {userName}
        </div>
    )
}