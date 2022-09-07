import React ,{useContext} from "react";
import {AppContext} from './ContextDataPassing';


export const ParentComponent = () =>  {
    const {setUserName} = useContext(AppContext);
    return (
        <>
        <input type="text" placeholder="Please Enter Username here"
        onChange={(event) => {
            setUserName(event.target.value)
        }} />
        </>
    )
}