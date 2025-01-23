import React, {useState} from 'react';

function MyComponent(){

    const [animes, setAnime] = useState([]);
    const [animeyear, setAnimeyear] = useState(new Date().getFullYear());
    const [animecreator, setAnimecreator] = useState("")
    const [animegenre, setAnimegenre] = useState("")

    function handleAddAnime(){
        
        const newAnime = {year: animeyear, 
                        creator: animecreator, 
                        genre: animegenre};

        setAnime(a => [...animes, newAnime]);

        setAnimeyear(new Date().getFullYear());
        setAnimecreator("");
        setAnimegenre("");
    
    }

    function handleRemoveAnime(index){
        setAnime(animes.filter((_, i) => i !== index));
    }
    function handleYearChange(event){
        setAnimeyear(event.target.value);
    }
    function handleCreatorChange(event){
        setAnimecreator(event.target.value);
    }
    function handleGenreChange(event){
        setAnimegenre(event.target.value);
    }
    return(<div>
        <h2>List Of Anime</h2>
        <ul>
            {animes.map((anime, index) => 
            <li key={index} onClick={() => handleRemoveAnime(index)}>    
                {anime.year} {anime.creator} {anime.genre}
            </li>)}
        </ul>
        <input type = "number" value={animeyear} placeholder="Enter Anime Year" onChange={handleYearChange}/> <br/>
        <input type = "text"  value={animecreator} placeholder="Enter Anime Creator" onChange={handleCreatorChange}/><br/>
        <input type = "text" value={animegenre} placeholder="Enter Anime Genre" onChange={handleGenreChange}/><br/>

        <button onClick={(handleAddAnime)}>Add Anime</button>

    </div>)
  
}
export default MyComponent