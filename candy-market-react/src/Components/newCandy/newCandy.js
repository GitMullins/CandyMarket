import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import candyData from '../data/candyData';

const defaultCandy = {
  name: '',
  type: '',
  flavor: '',
  isExpired: ''
};

const stringToBoolean = (string) => {
  switch(string.toLowerCase().trim()){
      case "true": case "yes": case "1": return true;
      case "false": case "no": case "0": case null: return false;
      default: return Boolean(string);
  }
}


class NewCandy extends Component {
  state = {
    newCandy: defaultCandy
  }

  formFieldStringState = (name, e) => {
    const tempCandy = { ...this.state.newCandy };
    tempCandy[name] = e.target.value;
    this.setState({ newCandy: tempCandy });
  }

  nameChange = e => this.formFieldStringState('name', e);

  typeChange = e => this.formFieldStringState('type', e);

  flavorChange = e => this.formFieldStringState('flavor', e);

  isExpiredChange = e => this.formFieldStringState('isExpired', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newCandy };
    saveMe.isExpired = stringToBoolean(saveMe.isExpired);
    candyData.postCandy(saveMe)
      .then(() => this.props.history.push('/'))
      .catch(err => console.error('unable to save', err));
  }

    render () {
      const { newCandy } = this.state;
    return (
      <div className="newCandy">
      <div className="btn">
          <Link className="btn btn-info" to={{ pathname: '/'}}>Go Home</Link>
        </div>

        <h1>New Candy</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name"
            value={ newCandy.name}
            onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="type">Type</label>
          <input
          type="text"
          className="form-control"
          id="type"
          placeholder="type"
          value={ newCandy.type}
          onChange={this.typeChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="flavor">Flavor</label>
          <input
          type="text"
          className="form-control"
          id="flavor"
          placeholder="flavor"
          value={ newCandy.flavor}
          onChange={this.flavorChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Expired</label>
          <input
          type="text"
          className="form-control"
          id="isExpired"
          placeholder="isExpired"
          value={ newCandy.isExpired}
          onChange={this.isExpiredChange}
          />
        </div>

        <button type="submit" className="btn btn-success">Save New Candy</button>
      </form>
      </div>
    );
  }
}

export default NewCandy;