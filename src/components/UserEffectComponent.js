import React, {useEffect , useState} from "react";
import axios from "axios";
export const UseEffectComponent = () => {
    
    const [email, setstate] = useState("rahul.sharma@gmail.com")
    const [count, setCountState] = useState(0)
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/comments').then(res => {
            console.log(res.data)
            setstate(res.data[0].email);
        })
    }, [])
    return (
        <div>
            User Email Address : {email}
            {count}
            <button onClick={() => {
                setCountState(count+1)
            }}>Increment</button>
        </div>
    )
}