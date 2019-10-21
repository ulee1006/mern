import React, { Component } from 'react';
import axios from 'axios';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {
        petname: "",
        pettype: "",
        description: ""
      }, 
      errors: {
        petname: "",
        pettype: "",
        description: ""
      }
    }
  }

  componentDidMount() {
    let _id = this.props.match.params._id;
    axios.get(`http://localhost:8000/api/pets/${_id}`)
      .then(res => {
        this.setState({pet: res.data});
      })
      .catch(err => console.log(err));
      console.log(this.state.pet.petname)
      
  }

  changepetname = e => {
    let pet = {...this.state.pet};
    pet.petname = e.target.value;
    this.setState({pet: pet});
  }

  changepettype = e => {
    let pet = {...this.state.pet};
    pet.pettype = e.target.value;
    this.setState({pet: pet});
  }

  changedescription = e => {
    let pet = {...this.state.pet};
    pet.description = e.target.value;
    this.setState({pet: pet});
  }

  updatePet = e => {
    e.preventDefault();
    let _id = this.props.match.params._id;
    axios.put(`http://localhost:8000/api/pets/${_id}`, this.state.pet)
      .then(res => {
        if(res.data.errors) {
          this.setState({errors: res.data.errors});
        } else {
          this.props.history.push("/pets")
        }
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
        <>
        <h1>Edit Pet Information</h1>
        <br></br>
      <form onSubmit={this.updatePet}>
        <input 
          type="text" 
          placeholder="Name" 
          onChange={this.changepetname} 
          value={this.state.pet.petname} 
        />
        {
          this.state.errors.petname ?
          <span>{this.state.errors.petname.message}</span> :
          ""
        }
        <br/>
        <input 
          type="text" 
          placeholder="Type" 
          onChange={this.changepettype} 
          value={this.state.pet.pettype}
        />
        {
          this.state.errors.pettype ?
          <span>{this.state.errors.pettype.message}</span> :
          ""
        }
        <br/>
        <input 
          type="text" 
          placeholder="Description" 
          onChange={this.changedescription} 
          value={this.state.pet.description}
        />
        {
          this.state.errors.description ?
          <span>{this.state.errors.description.message}</span> :
          ""
        }
        <br/>
        <input type="submit" />
      </form>
      </>
    );
  }
}

export default Edit;