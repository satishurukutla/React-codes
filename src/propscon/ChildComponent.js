import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
/*porps  acts as parameters and arguments 
porps is for only the Read 
porps is used for the transfor the properties from the parent to child  and child to parent 
state is immutable by using the set statements
it cannot be used in the funtion  this as WEll
*/