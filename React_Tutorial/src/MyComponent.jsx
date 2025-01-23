import React, {useState} from 'react';


function MyComponent(){

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [isMarried, setIsMarried] = useState(false);

    const updateName = () => {
        setName('Jiann');
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleMarried = () => {
        setIsMarried(!isMarried);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>Married: {isMarried ? 'Yes' : 'No'}</p>
        <button onClick={toggleMarried}>Toggle Married</button>
    </div>)
}
export default MyComponent