import React from "react";

const ScrollButton=()=>{
    const handleClick=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return(
        <button onClick={handleClick}>
            <h1  className="text-5xl font-bold ml-2 ">Felipe Lima
        </h1>
        </button>
    )
}

export default ScrollButton