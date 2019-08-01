import React from 'react';
import logo from './logo.svg';
import './App.css';

import SomeListComponent from './components/someListComponent';

const someProps = {
  items: [
    {text: 'Skating'}, 
    { text: 'Burnt'}, 
    { text: 'Fingers'}
  ],
  listDetails: {
    size: {
      height: 700,
      width: 600
    }
  },
  onClick: function(item){
    console.log('App says hi: ', item);
  }
}

function App() {
  return (
    <div className="App">
      <SomeListComponent {...someProps} />  
    </div>
  );
}

export default App;
