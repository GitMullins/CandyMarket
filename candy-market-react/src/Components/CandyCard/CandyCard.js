import React from 'react';
import candyData from '../data/candyData.js'
import { Link } from 'react-router-dom';

class CandyCard extends React.Component {
  static propTypes = {
    // drive: driveShape.driveCardShape,
  }

  eatCandy = (e) => {
    e.preventDefault();
    const { candy } = this.props;
    candyData.eatCandy(candy.id)
      .then(() => this.props.getCandy())
      .catch(err => console.error(err, 'unable to delete'));
  }

  render() {
    const { candy } = this.props;
    const editLink = `/edit/${candy.id}`;
    return (
      <div className="DriveCard col-3">
        <div className="drive-card card">
          <div className="card-body">
            <h5 className="card-title">{candy.name}</h5>
            <Link className="btn btn-warning"
            to={{pathname: editLink,
                state:{
                  candy
                }
              }}>
              Edit
              </Link>
            <button className="btn btn-danger" onClick={this.eatCandy}>x</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CandyCard;
