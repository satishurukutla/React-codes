/*import React, { useRef, useEffect } from 'react';

const FunctionalComponent = () => {
  const myRef = useRef(null); // Step 1: Create a ref

  useEffect(() => {
    console.log(myRef.current); // Step 3: Access the DOM element
  }, []);

  return <div ref={myRef}>Hello, World!</div>; // Step 2: Attach the ref to a DOM element
};

export default FunctionalComponent;
*/
/*import React, { Component } from 'react';

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef(); // Step 1: Create a ref
  }

  focusInput = () => {
    this.inputRef.current.focus(); // Step 3: Use the ref to focus the input
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} /> // Step 2: Attach the ref to the input element
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
*/
/*import { useState, useEffect, useRef } from "react";


function FocusInput() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {inputValue}</h1>
    </>
  );
}
export default FocusInput
*/
/*import React, { useRef } from 'react';

const FocusInput = () => {
  const myRef = useRef(null); // Step 1: Create a ref

  const scrollToElement = () => {
    myRef.current.scrollIntoView({ behavior: 'smooth' }); // Step 3: Use the ref to scroll to the element
  };

  return (
    <div>
      <button onClick={scrollToElement}>Scroll to Element</button>
      <div style={{ height: '1000px' }}>Some content here...</div>
      <div ref={myRef}>Scroll to me!</div> // Step 2: Attach the ref to the target element
    </div>
  );
};

export default FocusInput ;
*/
/*
import React, { useRef } from 'react';

const FocusInput = () => {
  const firstInputRef = useRef(null); // Step 1: Create refs for each input
  const secondInputRef = useRef(null);

  const focusNextInput = () => {
    if (firstInputRef.current === document.activeElement) {
      secondInputRef.current.focus(); // Step 3: Use the ref to focus the next input
    }
  };

  return (
    <div>
      <input type="text" ref={firstInputRef} placeholder="First Input" />
      <input type="text" ref={secondInputRef} placeholder="Second Input" />
      <button onClick={focusNextInput}>Focus Next Input</button>
    </div>
  );
};

export default FocusInput;
*/
/*import React, { useRef } from 'react';

const FocusInput = () => {
  const videoRef = useRef(null); // Step 1: Create a ref for the video element

  const playVideo = () => {
    videoRef.current.play(); // Step 3: Use the ref to play the video
  };

  const pauseVideo = () => {
    videoRef.current.pause(); // Step 3: Use the ref to pause the video
  };

  return (
    <div>
      <video ref={videoRef} width="400" controls>
        <source src="movie.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
};

export default FocusInput ;
*/
/*
import React, { useRef, useState } from 'react';

const FocusInput = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <video ref={videoRef} width="400" controls>
        <source src="movie.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
};

export default FocusInput;
*/
import React, { useRef, useState, useEffect } from 'react';

const FocusInput = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const videoElement = videoRef.current;
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);

    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
    };
  }, []);

  const playVideo = () => {
    if (!isPlaying) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    }
  };

  return (
    <div>
      <video ref={videoRef} width="400" controls>
        <source src="movie.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
};

export default FocusInput;




