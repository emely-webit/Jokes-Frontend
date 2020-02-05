import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import AllJokes from './components/AllJokes';
import UdvalgtJoke from './components/UdvalgtJoke';
import JokeAdmin from './components/JokeAdmin';
import Navbar from './components/Navbar';
import JokeOpret from './components/JokeOpret';
import JokeSlet from './components/JokeSlet';
import JokeRet from './components/JokeRet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/administrator" component={JokeAdmin}/>
        <Route path="/alle_jokes" component={AllJokes} />
        <Route path="/udvalgt/:id" component={UdvalgtJoke}/>

        <Route path="/opret" component={JokeOpret} />
        <Route path="/slet/:id" component={JokeSlet} />
        <Route path="/ret/:id" component={JokeRet} />

      </BrowserRouter>
      
    </div>
  );
}

export default App;
