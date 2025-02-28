// App.js
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { increment, decrement } from './actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
/*provider makes the store component available to the nested component 
use selector and  use disptach are the hooks extract the state and the disptach increment and decrement 
*/ 