import React from 'react';

function NameList(props) {
  const myListss = props.myListing || []; // Provide a default value to avoid undefined
  const listItems = myListss.map((myLists,index) => 
   <li key={index}>{myLists}</li>// Add a key to each list item
  );
  return (
    <div>
      <h2>React Map Example</h2>
      <ol>{listItems}</ol>
    </div>
  );
}

const myLists = ['A', 'B', 'C', 'D', 'D'];
 
export default function App() {
  return <NameList myListing={myLists} />;
}

 