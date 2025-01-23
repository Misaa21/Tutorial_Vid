import React, {useState} from 'react';

function MyComponent(){

    const [anime, setAnime] = useState(["SAO","One Piece","AOT"]);

    function handleAddAnime(){

        const newAnime = document.getElementById("animeInput").value;
        document.getElementById("animeInput").value = "";

        setAnime(f => [...f, newAnime]);
    }

    function handleRemoveAnime(index){
        setAnime(anime.filter((_, i) => i !== index));
    }

    return(<div>
        <h2>List Of Anime</h2>
        <ul>
            {anime.map((food, index) => <li key= {index} onClick= {() => handleRemoveAnime(index)}>
                {food}
                </li>)}
            <input type = "text" id="animeInput" placeholder="Enter Anime Name"/>
            <button onClick={handleAddAnime}>Add Anime</button> 
        </ul>

    </div>)
  
}
export default MyComponent