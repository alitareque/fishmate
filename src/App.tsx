import React, { FC } from 'react';
import ActionButton from './components/Button';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <ActionButton 
        buttonText= "Print Me!"
      />
    </div>
  );
};

export default App;
