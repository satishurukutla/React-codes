import React, { Component } from 'react';
class frag extends React.Component {   
    render() {   
     return (   
       <React.Fragment>  
            <h2> Hello World! </h2>   
        <p> Welcome to the JavaTpoint. </p>   
         </React.Fragment>  
     );   
    }   
}   
export default frag;
//before there is  an div after now are using the react.fragment it increase the performance 
//and we can use the <>