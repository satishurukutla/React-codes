// import React, { useState } from 'react';  
  
// function CountApp() {  
//   // Declare a new state variable, which we'll call "count"  
//   const [count, setCount] = useState(0);  
  
//   return (  
//     <div>  
//       <p>You clicked {count} times</p>  
//       <button onClick={() => setCount(count + 1)}>  
//         Click me  
//       </button>  
//     </div>  
//   );  
// }  
// export default CountApp; 

import React, { useState } from 'react';  
  
class CountApp extends React.Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      count: 0  
    };  
  }  
  render() {  
    return (  
      <div>  
        <p><b>You clicked {this.state.count} times</b></p>  
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>  
          Click me  
        </button>  
      </div>  
    );  
  }  
}  
export default CountApp; 
