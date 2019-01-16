//want to figure out how to use React to get content on the screen
//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


//Create a React Component
const App = () => {
  return <div>Hi There!</div>;
};


//Take React Component and shoe it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root') //reference public/index.html, built in native function
);
