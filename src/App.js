import React, {useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react';


import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Movies from './components/Movies';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchMovies() {
      let res = await fetch('https://swapi.dev/api/films/');
      let data = await res.json();
      setMovies(data.results)
    }

    fetchPeople();
    fetchMovies();
  }, [])
 

  return (
    <div>
      <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/people'>
              <People data={people}/>
            </Route>
            <Route exact path='/movies'>
              <Movies data={movies}/>
            </Route>
          </Switch>
        </Container>
      </Router>
      </>
    </div>
  );
}

export default App;
