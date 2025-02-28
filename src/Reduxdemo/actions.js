// actions.js
export const increment = () => ({
    type: 'INCREMENT'
  });
  
  export const decrement = () => ({
    type: 'DECREMENT'
  });
 /* Actions: Define what happened.

Reducer: Determines how the state changes in response to actions.

Store: Holds the state of the application.

Provider: Makes the store available to the application.

useSelector and useDispatch: Hooks to interact with the store in functional components
*/
// action contain the plain javascript code it have the type defines the action 
