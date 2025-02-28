/*import React, { useState, useEffect } from 'react';  
  
function CounterExample() {  
  const [count, setCount] = useState(0);  
  
  // Similar to componentDidMount and componentDidUpdate:  
  useEffect(() => {  
    // Update the document title using the browser API  
    document.title = `You clicked ${count} times`;  
  }, [count]);  
  
  return (  
    <div>  
      <p>You clicked {count} times</p>  
      <button onClick={() => setCount(count + 1)}>  
        Click me  
      </button>  
    </div>  
  );  
}  
export default CounterExample;  
*/
//Hooks are used exclusively in function components. They allow you to use state and other React features without writing a class. Hooks like useState, useEffect, and others provide a way to manage state, side effects, and other functionalities in function
//Fetching Data: You can use useEffect to fetch data from an API when the component mounts.

//Subscribing to Events: You can set up event listeners or subscriptions.

//Updating the DOM: You can directly manipulate the DOM or update the document title.

//Cleaning Up: You can clean up subscriptions or event listeners when the component unmounts.
import React, { useState, useEffect } from 'react';

function CounterExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // Public API for testing
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, ); // Empty dependency array means this effect runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Fetched Data</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterExample;

/*useEffect(() => {
    // Effect code here
    return () => {
        // Cleanup code here (optional)
    };
}, [dependencies]);
*/



