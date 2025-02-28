/*import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      console.log('Count incremented to:', newCount);
      return newCount;
    });
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
*/
/*import React ,{usestate ,useCallback} from 'react';
const MyComponent= ()=>{
    const [count ,newcount]= usestate(0);
    const increment = useCallback (()=>{
        newcount(count+1);
    },[]);
return(
<div>
    <p>count:{count}</p>
    <button on Click={increment}> increment</button>
</div>);
};
export default MyComponent;
*/
/*import React, { useState, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count => count + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
*/
//useCallback: Memoizes a function. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. Useful for passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
//useMemo: Memoizes a value. It returns a memoized value that only changes if one of the dependencies has changed. Useful for avoiding expensive calculations on every render
import React, { useState, useMemo } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const expensiveCalculation = (num) => {
    console.log('Calculating...');
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Memoized Value: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default MyComponent;


