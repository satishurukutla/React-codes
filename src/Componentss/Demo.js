import React, { Component } from 'react';

class Demo  extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Demo;
//this is the function component having the rendor method 
//it wont support the this keyword and state 
//it can be done with using  the hooks concept 
//--------------------------------------------------------------------
/*import React, { Component } from 'react';  
class App extends React.Component {  
   render() {  
      return (  
         <div>  
            <First/>  
            <Second/>  
         </div>  
      );  
   }  
}  
class First extends React.Component {  
   render() {  
      return (  
         <div>  
            <h1>JavaTpoint</h1>  
         </div>  
      );  
   }  
}  
class Second extends React.Component {  
   render() {  
      return (  
         <div>  
            <h2>www.javatpoint.com</h2>  
            <p>This websites contains the great CS tutorial.</p>  
         </div>  
      );  
   }  
}  
export default App; 
*/ 