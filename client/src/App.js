  
import React, { Component } from 'react';
import './App.css';
import AllPets from './AllPets';
import New from './New';
import Edit from './Edit';
import OnePet from './OnePet';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="jumbotron">
        <h1>Pet Shelter</h1>
      
      <Link to="/pets">Home</Link>
      &nbsp;
      <Link to="/new">Add Pet</Link>
      </div>
      <Route exact path="/pets" component = {AllPets}/>
      <Route path="/new" component = {New}/>
      <Route exact path="/pets/:_id" component = {OnePet}/>
      <Route path="/pets/edit/:_id" component = {Edit}/>
      <Route exact path="/" component = {AllPets}/>
      </BrowserRouter>
    );
  }
}


export default App;