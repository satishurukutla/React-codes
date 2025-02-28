import React from 'react';
import ReactDOM from 'react-dom/client';
//import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Contact from './routerss/Contact'  
//import About from './routerss/About' 
//import { BrowserRouter as Router, Route,  Routes,NavLink } from 'react-router-dom'  
//import Functional from './Componentss/Functional'; 
//import Demo from './Componentss.js/Demo';
//import Frag from './fragment/frag';
//import Concept from './javascriptss/Concept'
//import ParentComponent from './propscon/ParentComponent'
//import Namelist from './Namelist'
//import CountApp from './Hookscon/CountApp'
//import CounterExample from './Hookscon/CounterExample'
//import LifecycleExample from './Cycles/LifecycleExample'
//import FocusInput  from './Hookscon/FocusInput'
//import Cont from './Hookscon/Cont'
//import App from './App'
import FlexGridExample from './FlexGridExample'

//import Demo  from './Formscon/Demo'
//import  MyComponent from './Usecallbackdemo/MyComponent'

//import App  from './Reduxdemo/App'
//ReactDOM.render( <React.StrictMode> <Demo /> <Demo /> </React.StrictMode>, document.getElementById('root') );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FlexGridExample/>
  </React.StrictMode>
);

reportWebVitals();
/*<Router>  
<div>  
  <h1>React Router Example</h1>  
  <ul>  
      
    <li>  
      <NavLink to="/about" exact activeStyle={  
         {color:'green'}  
      }>About</NavLink>  
    </li>  
    <li>  
      <NavLink to="/contact" exact activeStyle={  
         {color:'magenta'}  
      }>Contact</NavLink>  
    </li>  
  </ul>  
  <Routes> 
    
     <Route path="/about" element={<About />} />  
     <Route path="/contact" element={<Contact />} />  
     
     </Routes>  
</div>
  
</Router> 
</React.StrictMode>
*/
