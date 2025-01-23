import React, {useState} from 'react';

function MyComponent(){
    const [anime, setAnime]= useState({year: 1999, 
        name: "One Piece", 
        creator: "Toei"});

        function handleYearChange(event){
            setAnime( c => ({...anime, year: event.target.value}));

        }
        function handleNameChange(event){
            setAnime( c => ({...anime, name: event.target.value}));
            
        }
        function handleCreatorChange(event){
            setAnime( c => ({...anime, creator: event.target.value}));
            
        }


        return (<div>
            <p>Your Favorite Anime is: {anime.year} {anime.name} {anime.creator}</p>

            <input type= "number" value= {anime.year} onChange= {handleYearChange}/><br/>
            <input type= "text" value= {anime.name} onChange= {handleNameChange}/><br/>
            <input type= "text" value= {anime.creator} onChange= {handleCreatorChange}/><br/>
        </div>)

}
export default MyComponent