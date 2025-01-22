import profilePic from "./assets/profile.jpg"

function Card(){

    return(
        <div className="card">
            <img className="card-img" src= {profilePic} alt = "profile picture"></img>
            <h2 className="card-title">Jiann</h2>
            <p className="card-text">This is my Tutorial Card Component</p>

        </div>
    );

}

export default Card