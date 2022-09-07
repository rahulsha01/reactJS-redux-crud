import React , {createContext , useState} from "react";
import { ParentComponent } from "./ParentComponent";
import {ChildComponent} from "./ChildComponent";
// Cotext is a Collection of state
export const AppContext = createContext(null);
export const ContextDataPassing = () => {
    const [userName, setUserName] = useState("")
    return (
            <AppContext.Provider value={{userName , setUserName}}>
                <ParentComponent></ParentComponent>
                <ChildComponent></ChildComponent>
            </AppContext.Provider>
    )
}