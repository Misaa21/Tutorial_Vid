

function Button(){


    const handleClick = (e) => e.target.textContent=  "Wow";

    const handleClick2 = (e) => e.target.textContent = "Really?"
 return (
    <>
        <button onClick= {(e) => handleClick2(e)}> Dont Click me</button>    
    </>
 );
}

export default Button;