import React, { useState } from 'react';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import About from './pages/About';
import GetStarted from './pages/GetStarted';
import Discover from './pages/Discover';
import Home from './pages/Home';
// Router
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  // Location
  const location = useLocation();
  // State 
  const [click, setClick] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Nav click={click} setClick={setClick} />

      <Switch location={location} key={location.pathname}>

        <Route path='/' exact>
          <Home click={click} setClick={setClick} />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/discover'>
          <Discover />
        </Route>

        <Route path='/getStarted'>
          <GetStarted />
        </Route>

      </Switch>

    </>
  );
}

export default App;
