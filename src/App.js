import React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

const App = () => {
  const handleChange = event => {
    console.log(event);
  };

  return (
    <div>
     <h1>My Hacker Stories</h1>

     <label htmlFor="search">Search: </label>
     <input id="search" type="text"/>

     <hr />
    
    <List />
    
    </div>
  );
}

 const List = () => {
  return list.map(function(item) {
  return (
  <div key={item.objectID}>
  <span>
  <a href={item.url}>{item.titlse}</a>
  </span>
  <span> {item.author}</span>
  <span> {item.num_comments}</span>
  <span>{item.points}</span>
  </div>
  );
  });
  }

export default App;
