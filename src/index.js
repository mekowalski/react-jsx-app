//want to figure out how to use React to get content on the screen
//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a React Component(ES6)
const App = () => {
  return (
    <div>
      <label class="label" for='name'>Enter Name: </label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'green', color: 'white' }}>Submit</button>
    </div>
  )
};


//Take React Component and shoe it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root') //reference public/index.html, built in native function
);
