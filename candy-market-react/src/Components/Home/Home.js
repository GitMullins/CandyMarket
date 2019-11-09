import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import CandyCard from '../CandyCard/CandyCard.js'
import candyData from '../data/candyData';

class Home extends Component {
  state = {
    allCandy: [],
  }
  
  getCandy = () => {
    candyData.getCandy().then((candy) => {
      let myNewValues = [...candy];
      this.setState({allCandy: myNewValues});
  
    }).catch((error) => {
      console.log("it broke: ", error);
    })
  }
  
  showAllCandy = () => {
    const myValues = [...this.state.allCandy];
    return myValues.map(value => <div key={value.id}>{value.name}</div>)
  }

  componentDidMount() {
    this.getCandy();
  }
  
  render () {
    const {allCandy} = this.state;
    const makeCandyCards = allCandy.map(candy => (
      <CandyCard
      key={candy.id}
      candy={candy}
      getCandy={this.getCandy()}/>
    ))
    return (
      <div className="Home">
          <Link className="btn btn-info" to={{ pathname: '/new'}}>Add New Candy</Link>
          {makeCandyCards}
      </div>
    );
  }
}

export default Home;