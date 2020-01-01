import React from 'react';
import Toggle from './components/toggle button';
import { ReactComponent as Top } from './assests/top.svg';
import { ReactComponent as Bottom } from './assests/bottom.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='top'>
        <Top className='bg-top' />
      </div>
      <Toggle />
      <div className='bottom'>
         <Bottom className='bg-bottom' />
      </div>
    </div>
  );
}

export default App;
