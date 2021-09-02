import React, {useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import fakedata from './fakedata.json'


import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Movies from './components/Movies';
import About from './components/About';
import './App.css';

function App() {
  const [people, setPeople] = useState(null);
  const [movies, setMovies] = useState([fakedata[0]]);

  // useEffect(() => {
  //   async function fetchPeople() {
  //     let res = await fetch('https://swapi.dev/api/people/');
  //     let data = await res.json();
  //     setPeople(data.results);
  //   }

  //   async function fetchMovies() {
  //     let res = await fetch('https://swapi.dev/api/films/');
  //     let data = await res.json();
  //     setMovies(data.results)
  //   }

  //   // fetchPeople();
  //   fetchMovies();
  // }, [])
 
  console.log('render')


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
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/movies'>
              <Container>
                <Movies data={movies} setPeople={setPeople}/>
              </Container>
              <Container>
                { people && <People data={people}/>}
              </Container>
            </Route>
          </Switch>
        </Container>
      </Router>
      </>
    </div>
  );
}

export default App;
