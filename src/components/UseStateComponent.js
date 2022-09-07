import React, { useState, useReducer } from "react";


export const UseStateComponent = () => {
    // const [counter, setCounter] = useState(0)
    // const increment = () => {
    //     setCounter(counter + 1);
    //     console.log(counter);
    // }

    const reducer = (state, action) => {
        switch(action.type) {
            case "Increment" : 
            return {
                counter : state.counter + 1 , showText :state.showText
            }
            case "toggleShowText" : 
            return {
                counter : state.counter , showText : !state.showText
            }
            case "default" : 
            return state
        }

    }

    const [state, dispatch] = useReducer(reducer, {counter: 0 , showText : true})

    return (
        <div>
            <h1>{state.counter}</h1>
            <button className="btn btn-primary" onClick={() => {
                dispatch({type: "Increment"})
                dispatch({type: "toggleShowText"})
            }}>Increment</button>
            {state.showText && <div>This is Text</div>}
        </div>
    )
}