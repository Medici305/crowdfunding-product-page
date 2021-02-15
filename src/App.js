import React, { useState } from 'react';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';

function App() {
  // State
  const [click, setClick] = useState(false);
  return (
    <div className="App">
      <GlobalStyle />
      <Nav click={click} setClick={setClick} />
    </div>
  );
}

export default App;
