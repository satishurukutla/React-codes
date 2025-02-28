import React from 'react';
import './index.css';

const FlexGridExample = () => {
  return (
    <div>
      <div className="flex-container">
        <div className="flex-item">Item 1</div>
        <div className="flex-item">Item 2</div>
        <div className="flex-item">Item 3</div>
      </div>
      
      <div className="grid-container">
        <div className="grid-item">Item A</div>
        <div className="grid-item">Item B</div>
        <div className="grid-item">Item C</div>
      </div>
    </div>
  );
};

export default FlexGridExample;
