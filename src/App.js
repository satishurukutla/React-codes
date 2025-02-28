//import logo from './logo.svg';
//import './App.css';
//-----------------------------The setTimeout() Method executes a function, after waiting a specified number of milliseconds.------- 

//  let App = function () {
//     console.log("gfg1");
// }
// setTimeout(App, 2000); 
  //------------------------------------------------setinterval--------------------------------------------------------------

//Using setInterval() without a clearInterval() call can lead to infinite loops, potentially causing performance issues.
//The setInterval() method repeats a given function at every given time interval. 

/*function App() {
  console.log("gfg");
}
setInterval(App, 1000);
*/

setTimeout(App, 2000);
function App() {
    console.log("gfg1");
}
function gfg() {
    console.log("gfg");
}
setInterval(gfg, 1000);


//--------------------------In JavaScript, we can create a Promise by using the Promise() constructor.------------------------------

//-----------------------------------const Promise = new Promise((resolve,reject) => {....}); -------------------------------------
 
 new Promise((resolve, reject)=>{  
  let a = 3; 
  if(a==3){  
      resolve('Success');  
  }  
  else{  
      reject('Failed');  
  }  
})  
.then((message) => { console.log("It is then block. The message is: " + message); }).catch((message) => { console.log("It is Catch block. The message is: " + message); });  
export default App;
// Syntax of IIFE with ES6 arrow functions (though parentheses only allowed on outside)  
  
//----------------------------------------------------(() => { /* ... */ })();------------------------------------------------------------   
// --------------------------------------------------------Regular Function.---------------------------------------------------
// hello(); 
function hello()   
{   
    console.log("Regular function");   
};   
   
hello();   
    
//---------------------------------------------------- IIFE creation and execution. -----------------------------------------------------  
(function() { console.log("Immediately Invoked Function Expression"); })(); 

//----------------------------------------------------Arrow function with constrctor--------------------------------------------------
(() =>console.log("Immediately Invoked Function Expression" ))(); 

//------------------------------------------------------JavaScript map() Method -----------------------------------------------------------------
//The map() method in JavaScript is used to create a new array by applying a function to each element of the original array. It iterates through each element of the array and invokes a callback function for each element. The result of the callback function is then added to the new array.

/*let arr= [2, 4, 8, 10]
let updatedArr = arr.map(val=> val=val+5);
console.log(arr);
console.log(updatedArr);
*/

//------------------------------------------------. JavaScript filter() Method ----------------------------------------------

//The filter() method in JavaScript is used to create a new array with all elements that pass a certain condition defined by a callback function. It iterates through each element of the array and invokes the callback function for each element. If the callback function returns true for an element, that element is included in the new array; otherwise, it is excluded
/*
let arr = [2, 4, 8, 10];
let updatedArr = arr.filter(val => val < 5);
console.log(arr);
console.log(updatedArr);

*/
//--------------------------------------------------------JavaScript reduce() Method-------------------------------------------

//The reduce() method in JavaScript is used to reduce an array to a single value. It executes a provided callback function once for each element in the array, resulting in a single output value. The callback function takes four arguments: accumulator, currentValue, currentIndex, and the array itself.
/*let arr= [2,4,8,10]
let updatedArr = arr.reduce((prev, curr)=> curr= prev+curr)
console.log(arr);
console.log(updatedArr);
*/
//---------------------------------------------------------filter------------------------------------------

// Using filter to get fruits which are yellow in color

const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'kiwi', color: 'green' },
  { name: 'orange', color: 'orange' },
  { name: 'pineapple', color: 'yellow' }
];

const yellowFruits = 
  fruits.filter(fruit => fruit.color === 'yellow');

console.log(yellowFruits);
// ----------------------------------------------------------- == opertor ----------------------------------------------

//javaScript ‘==’ operator: In Javascript, the ‘==’ operator is also known as the loose equality operator which is mainly used to compare two values on both sides and then return true or false. 

	// '==' operator
	console.log(21 == 21);
	console.log(21 == '21');
	console.log('food is love'=='food is love');
	console.log(true == 1);
	console.log(false == 0);
	console.log(null == undefined);
  //------------------------------------------------------- ===operator ---------------------------------------------------

  //JavaScript ‘===’ operator: Also known as strict equality operator, it compares both the value and the type which is why the name “strict equality”.
  
	// '===' operator
	console.log('hello world' === 'hello world');
	console.log(true === true);
	console.log(5 === 5);
  //----------------------------------------------------------------------------------------------
 /* let user = {  
    firstName : "Sunil",  
    lastName : "Kumar",  
    fullName : function(){  
        return this.firstname + " " + this.lastName;  
    }  
};
*/
  //--------------------------------------------------------------------------------------------------------
let user = {  
  firstName : "Sunil",  
  lastName : "Kumar",  
  fullName(){  
      return this.firstname + " " + this.lastName;  
  }  
}; 
console.log(user);  

