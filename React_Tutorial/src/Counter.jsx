import React, {useState} from 'react';

function Counter(){

    const [count, setCount]= useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
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
export default Counter