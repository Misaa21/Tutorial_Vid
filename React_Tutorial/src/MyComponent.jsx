import React, {useState} from 'react';


function MyComponent(){

    const[game, setGame] = useState("");
    const[hours, setHours] = useState();
    const[comment, setComment] = useState("");
    const[client, setClient] = useState("");
    const[review, setReview] = useState("");

    const handleGameChange = (event) => {
        setGame(event.target.value);
    }
        const handleHoursChange = (event) => {
            setHours(event.target.value);
    }
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }
    const handleClientChange = (event) => {
        setClient(event.target.value);
    }
    const handleReviewChange = (event) => {
        setReview(event.target.value);
    }
    return(<div>
        <input value={game} onChange= {handleGameChange}/>
        <p>I played the game named {game}</p>

        <input value = {hours} onChange= {handleHoursChange} type="number"/>
        <p> and my hours played on it {hours} hr/s.</p>

        <textarea value={comment} onChange={(handleCommentChange)} 
        placeholder="What are your thoughts on the game you played?"/>
        <p>Comment: {comment}</p>

       
       <select value={client} onChange={handleClientChange}>
            <option value ="">Select an Option</option>
            <option value ="Steam">Steam</option>
            <option value ="Epic Games">Epic Games</option>
            <option value ="Riot">Riot</option>
            <option value ="Hoyoplay">Hoyoplay</option>
        </select>
        <p> And I played it from {client} </p>
        
        <label>
            <input type="radio" value= "Recommend it" 
            checked={review === "Recommend it"}
            onChange={handleReviewChange} />
            Recommend it
        </label>

        <label>
            <input type="radio" value= "Not recommend it" 
            checked={review === "Not recommend it"}
            onChange={handleReviewChange} />
            Not recommend it
        </label>

        <p>Would you recommend it? I would {review}</p>
    </div>)
}
export default MyComponent