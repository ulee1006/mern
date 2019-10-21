import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class OnePet extends Component {
    constructor(props){
        super(props);
        this.state = {
            pet: {}
        }
    }

    componentDidMount(){
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res => this.setState({pet: res.data}))
            .catch(err => console.log(err));
            console.log(this.state)  
    }

    delete = (_id, e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
          .then(res => this.componentDidMount())
          .catch(err => console.log(err));
        this.props.history.push("/pets");
        window.location.reload();
          
      }
    Increase = () => {

        let _id = this.props.match.params._id;
        axios.put(`http://localhost:8000/api/pets/${_id}` , {like:this.state.pet.like + 1 })
          .then(res => {
            console.log(res);
            this.setState({pet: {...this.state.pet, like: this.state.pet.like + 1 } , like:true});
            localStorage.setItem("likes",this.state.pet._id);
            document.getElementById("Liker").disabled=true;
            this.props.history.push(`/pets/${_id}`);
          })
          .catch(err => console.log(err));
    }


  render() {
    return (
        <>
            <h1>Information about  {this.state.pet.petname}</h1> 
            <h2>Pet Type:  {this.state.pet.pettype}</h2>
            <p>Description:  {this.state.pet.description}</p> 
            <p>Likes: {this.state.pet.like}</p>
            <button onClick={
                this.delete.bind(this, this.state.pet._id)}>
                    Adopt
            </button>
            <button id="Liker" onClick={this.Increase}>Like</button>
        </>
    );
  }
}

export default OnePet;