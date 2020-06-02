import React from 'react';
import './global.scss';

//import fake data
import data from './data/data.js'

//import sections
import TopBar from './sections/TopBar/TopBar.component'

function App() {
  console.log(data)
  return (
    <div>
      <TopBar />
    </div>
  );
}

export default App;
