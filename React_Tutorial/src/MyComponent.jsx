import React, { useState, useEffect } from 'react';

function MyComponent(){
    
    const [count, setCount]=useState(0);
    const [color, setColor]=useState("green");
    const [width, setWidth]=useState(window.innerWidth);
    const [height, setHeight]=useState(window.innerHeight);
    
    useEffect (() => {
        document.title = `Count: ${count} ${color} Size: ${width}x${height}`;
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, [count, color]);

    

    function addCount(){
        setCount(c=>c + 1);
    }

    function subtractCount(){
        setCount(c=>c - 1);
    }

    function changecolor(){
        setColor(c => c === "green" ? "red" : "green")

    }

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
    <p style={{color: color }}> Count:  {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button> <br/>

    <button onClick={changecolor}>Change Color</button>

        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>)
}

export default MyComponent;