import React from 'react';
import candyData from '../data/candyData.js';

import { Link } from 'react-router-dom';

const stringToBoolean = (string) => {
  switch(string.toLowerCase().trim()){
      case "true": case "yes": case "1": return true;
      case "false": case "no": case "0": case null: return false;
      default: return Boolean(string);
  }
}

// const editingCandy = () =>{
//   if(this.state.editingCandy)
//   {
//     return this.props.location.state.candy.name.toString();
//   }
//   return null;
// }

const defaultCandy = {
  name: '',
  type: '',
  flavor: '',
  isExpired: stringToBoolean('')
};

class EditCandy extends React.Component {
  state = {
    newCandy: defaultCandy,
    editingCandy: this.props.location.state.candy
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
    const candyId = this.props.computedMatch.params.id;
    candyData.putCandy(saveMe, candyId)
      .then(() => this.props.history.push('/'))
      .catch(err => console.error('unable to edit', err));
  }

  render () {
    const { newCandy } = this.state;
    // console.error(this.props.location.state.candy);
  return (
    <div className="newCandy">
    <div className="btn">
        <Link className="btn btn-info" to={{ pathname: '/'}}>Go Home</Link>
      </div>

      <h1>Edit Candy</h1>
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

      <button type="submit" className="btn btn-success">Save Updated Candy</button>
    </form>
    </div>
  );
}
}

export default EditCandy;
