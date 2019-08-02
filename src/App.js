import React from 'react';
import './App.css';

import SomeListComponent from './components/someListComponent';

const exampleProps = {
  items: [
    { text: 'Skating'}, 
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
    alert('You clicked on item: ' + item);
  }
}

function App() {
  return (
    <div className="App">
      <SomeListComponent {...exampleProps} />  
    </div>
  );
}

export default App;
