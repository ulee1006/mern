  
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Link
  } from 'react-router-dom';

class AllPets extends Component {
    constructor(props){
        super(props);
        this.state = {
            pets: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8000/api/pets")
            .then(res => this.setState({pets: res.data}))
            .catch(err => console.log(err));
            console.log(this.state)  
    }


render() {
    return (
      <table border="1">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
          {
            this.state.pets.map(s =>
              <tr key={s._id}>
                <td>{s.petname}</td>
                <td>{s.pettype}</td>
                <td>
                  
                  <Link to={"/pets/" + s._id}>Details</Link>
                  &nbsp;|&nbsp;
                  <Link to={"/pets/edit/" + s._id} >edit</Link>
                </td>
              </tr>  
            )
          }
        </tbody>
      </table>
    );
  }
}

export default AllPets;