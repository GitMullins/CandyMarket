import React, { Component } from 'react';
import './Home.scss';
// import candyData from '../data/candyData';

class Home extends Component {
  state = {
    displayCandy: []
  }
  
  // getCandy = () => {
  //   //make api call
  //   //setState with results
  //   candyData.getCandy().then((values) => {
  //     let myNewValues = [...values];
  //     this.setState({displayCandy: myNewValues});
  
  //   }).catch((error) => {
  //     console.log("it broke: ", error);
  //   })
  // }
  
  showAllValues = () => {
    const myValues = [...this.state.displayValues];
    return myValues.map(value => <div>{value}</div>)
  }
  
  render () {
    const testText = this.props.testText;
    return (
      <div className="Home">
          <h1 className="testTarget">{testText}</h1>
          {/* {this.getCandy()} */}
      </div>
    );
  }
}

export default Home;