import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = (props) => {
  const sessionLinks = () => {
    return(
    <>
      <Link to='/login'>Login</Link> or <Link to='/signup'>Sign up!</Link> 
    </>
    )};

  const personalGreeting = () => {
    return(
    <div>
        <h1>Hi, {props.currentUser.username} </h1>
        <button onClick={props.logout}>Log Out</button>
    </div>
    )}

  return props.currentUser ? personalGreeting() : sessionLinks()
}

export default Greeting;