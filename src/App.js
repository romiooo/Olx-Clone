import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Car from './components/Car';
import Motercycle from './components/Motercycle';
import Mobile from './components/Mobile';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/car" component={Car} />
          <Route path="/motercycle" component={Motercycle} />
          <Route path="/mobile" component={Mobile} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
