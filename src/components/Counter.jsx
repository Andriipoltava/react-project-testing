import React, { useState } from "react";

const Counter=function(){
    const[counter,setCounter]=useState(0)

    const Inc = () => {
        setCounter(counter + 1)
    }
    const Dec = () => {
        setCounter(counter - 1)
    }

    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={Inc}>+1</button>
            <button onClick={Dec}>-1</button>
        </div>
    )
}
export default Counter