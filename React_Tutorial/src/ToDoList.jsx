import React, { useState } from 'react';

function ToDoList(){
    const [tasks, setTask] = useState(["Take a Shower", "Eat Lunch"]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t =>[...t, newTask]);
        setNewTasks("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTask(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
        
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
        
    }

    return(
        <div className="to-do-list"> 
            <h1>To-Do-List</h1>
            <div>
                <input 
                type= "text"
                placeholder='Enter a task...'
                value={newTask}
                onChange={handleInputChange}/>           
                <button className= "add-b" 
                onClick={addTask}>
                Add Task</button>
         </div>
         <ol>
            {tasks.map((t, index) => 
            <li key={index}>
                <span className="text">{t}</span>
                <button 
                className='delete-b'
                onClick={() =>deleteTask(index)}>
                🗑️
                </button>
                <button 
                className='move-b'
                onClick={() =>moveTaskUp(index)}>
                ☝️
                </button>
                <button 
                className='move-b'
                onClick={() =>moveTaskDown(index)}>
                👇
                </button>
            </li>
        )}
         </ol>
         </div>
         
    )
}

export default ToDoList