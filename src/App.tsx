import './App.scss';
import React from 'react';
import Comparison from './Components/Comparison/Comparison.tsx';
import vegData from './Data/database.tsx';
import './Components/Comparison/Comparison.scss';

function App() {
  return (
    <div className="App">
      <Comparison veg1={vegData.carrot} veg2={vegData.aubergine} />
    </div>
  );
}

export default App;
