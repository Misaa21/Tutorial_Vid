import PropTypes from 'prop-types'

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h1>Welcome back, {props.username}!</h1>;
    // }
    // else{
    //     return <h1>Please Log In to Continue</h1>
    // }

    // return(props.isLoggedIn ?   <h1 className="welcome-m">Welcome back, {props.username}!</h1> : 
    //                             <h1 className="login-m">Please Log In to Continue!</h1> )

    const welcomeMessage = <h2 className="welcome-m">
                            Welcome back, {props.username}!
                            </h2>


    const loginMessage =    <h2 className="login-m">
                            Please Log In to Continue!
                            </h2>

    


    return(props.isLoggedIn ? welcomeMessage : loginMessage)


}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Default"
}

export default UserGreeting