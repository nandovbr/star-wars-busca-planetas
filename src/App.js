import React from 'react';
import './App.css';
import Table from './componentes/Table';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      <h1>Star Wars Planets</h1>
      <Table />
    </StarProvider>
  );
}

export default App;
