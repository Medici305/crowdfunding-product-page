import React from 'react';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import About from './pages/About';
import GetStarted from './pages/GetStarted';
import Discover from './pages/Discover';
import Home from './pages/Home';
// Router
import { Route, Switch, useLocation } from 'react-router-dom';

function App() {
  // Location
  const location = useLocation();
  return (
    <>

      <GlobalStyle />
      <Nav />

      <Switch location={location} key={location.pathname}>


        <Route path='/' exact>
          <Home />
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
