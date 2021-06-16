import React from 'react';

import Expenses from './components/Expenses';

import './App.css';

function App() {

  const expenses = [
    {
      date: new Date(2021,5,21),
      title: "Car rent",
      price: "$250.00"
    },
    {
      date: new Date(2021,4,30),
      title: "House rent",
      price: "$1050.00"
    },
    {
      date: new Date(2021,6,10),
      title: "Car Payment",
      price: "$450.00"
    }
  ];

  return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <Expenses expenses={expenses} />
      </div>
    );
  }

export default App;
