import React from 'react';

// Child component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function Functional () {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default Functional;;
//this is the class componet having the return and rendor method 
//this having the constrctor method to initiate the state 

 