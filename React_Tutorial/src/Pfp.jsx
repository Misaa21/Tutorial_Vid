

function PFP(){


    const imageUrl = './src/assets/Profile.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)}  src={imageUrl}></img>)
}

export default PFP;