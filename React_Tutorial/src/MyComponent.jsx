
import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

    const ref = useRef("Pizza");

    console.log(ref);

    useEffect (() => {
        console.log("COMPONENT RENDERED");
    }
)
    function handleClick(){
        ref.current++;
        console.log(ref.current);
    }

    return(
    <button onClick={handleClick}>
        Click me!
    </button>
    <input />
    );

}
export default MyComponent