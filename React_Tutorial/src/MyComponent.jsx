import React, {useState} from 'react';

function MyComponent(){

    const [count, setCount]= useState(0);

    function increment() {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function reset() {
        setCount(0);
    }
    

    return(
    <div className='counter-c'>
        <p className="count-d">{count}</p>
        <button className="counter-b" onClick={decrement}>-1</button>
        <button className="counter-b" onClick={reset}>=0</button>
        <button className="counter-b" onClick={increment}>+1</button>

    </div>
    );


}
export default MyComponent