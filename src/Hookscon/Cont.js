import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [state, setState] = useState('Hello, World!');

    return (
        <MyContext.Provider value={{ state, setState }}>
            {children}
        </MyContext.Provider>
    );
};

const MyComponent = () => {
    const { state, setState } = useContext(MyContext);// my context acts like a props using the create context concept
    return (
        <div>
            <p>{state}</p>
            <button onClick={() => setState('Hello, React!')}>Change State</button>
        </div>
    );
};

const Cons = () => (
    <MyProvider>
        <MyComponent />
    </MyProvider>
);

export default Cons;
