import React, { Component } from 'react';
import './Home.scss';
import candyData from '../data/candyData';

class Home extends Component {
  state = {
    displayCandy: []
  }
  
  getCandy = () => {
    //make api call
    //setState with results
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
  
  render () {
    const testText = this.props.testText;
    return (
      <div className="Home">
          <h1 className="testTarget">{testText}</h1>
          <button onClick={this.getCandy}>Click Me</button>
          {this.showAllCandy()}
      </div>
    );
  }
}

export default Home;