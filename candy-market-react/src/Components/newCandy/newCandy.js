import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import candyData from '../data/candyData';

const defaultCandy = {
  name: '',
  type: '',
  flavor: '',
  isExpired: ''
};

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
    console.error('thing to save', saveMe);
    candyData.postCandy(saveMe)
      .then(() => this.props.history.push('/home'))
      // .then(this.redirect)
      .catch(err => console.error('unable to save', err));
  }

    render () {
      const { newCandy } = this.state;
    return (
      <div className="newCandy">
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
      <div className="btn">
          <Link className="btn btn-info" to={{ pathname: '/'}}>Go Home</Link>
        </div>
      </div>
    );
  }
}

export default NewCandy;