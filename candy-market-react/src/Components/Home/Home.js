import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import candyData from '../data/candyData';

class Home extends Component {
  state = {
    displayCandy: [],
  }
  
  getCandy = () => {
    candyData.getCandy().then((candy) => {
      let myNewValues = [...candy];
      this.setState({displayCandy: myNewValues});
  
    }).catch((error) => {
      console.log("it broke: ", error);
    })
  }
  
  showAllCandy = () => {
    const myValues = [...this.state.displayCandy];
    return myValues.map(value => <div key={value.id}>{value.name}</div>)
  }

  componentDidMount() {
    this.getCandy();
  }
  
  render () {
    return (
      <div className="Home">
          <Link className="btn btn-info" to={{ pathname: '/new'}}>Add New Candy</Link>

          {this.showAllCandy()}
          {/* {console.error('render')} */}
      </div>
    );
  }
}

export default Home;