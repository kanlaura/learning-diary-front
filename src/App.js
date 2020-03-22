import React from 'react';
import './App.css';
import logo from './diary.webp';
import Navigation from './components/Navigation';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Paper } from '@material-ui/core';


function App() {
  return (
    < Router>
      <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My learning diary</h1>
        < Navigation />
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/posts" component={Posts} />
          <Route path="/new" component={NewPost} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <Paper elevation={3} className="Home">
    <h1>Home page!!!</h1>
  </Paper>
)

export default App;
