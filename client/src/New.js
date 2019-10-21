import React, { Component } from 'react';
import axios from 'axios';


class New extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newPet: {
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

  addPet = e => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/pets", this.state.newPet)
      .then(res => {
        console.log(res);
        if(res.data.errors) {
          this.setState({errors: res.data.errors});
        } else {
          this.props.history.push("/pets");
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeName = e => {
    let newPet = {...this.state.newPet};
    newPet.petname = e.target.value;
    this.setState({newPet: newPet});
  }

  changeType = e => {
    let newPet = {...this.state.newPet};
    newPet.pettype = e.target.value;
    this.setState({newPet: newPet});
  }

  changeDescription = e => {
    let newPet = {...this.state.newPet};
    newPet.description = e.target.value;
    this.setState({newPet: newPet});
  }

  render() {
    return (
    <>
        <h1> Register a Pet</h1>
        
      <form onSubmit={this.addPet}>
        <input 
          type="text" 
          placeholder="Name" 
          onChange={this.changeName} 
          value={this.state.newPet.petname} 
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
          onChange={this.changeType} 
          value={this.state.newPet.pettype}
        />
        {
          this.state.errors.pettype ?
          <span>{this.state.errors.pettype.message}</span> :
          ""
        }
        <br/>
        <input 
          type="text" 
          placeholder="description" 
          onChange={this.changeDescription} 
          value={this.state.newPet.description}
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

export default New;