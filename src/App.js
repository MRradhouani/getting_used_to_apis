import React from 'react';
import UserList from './UserList.js'
import logo from './logo.svg';
import './App.css';
// import jsonServerProvider from 'ra-data-json-server';


// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => console.log(data));

function App() {
  return (
    <div className="App">

            <UserList/>


    </div>
  );
}

export default App;
