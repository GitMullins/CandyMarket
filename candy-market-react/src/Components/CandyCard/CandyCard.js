import React from 'react';
import candyData from '../data/candyData.js'
// import { Link } from 'react-router-dom';

class CandyCard extends React.Component {
  static propTypes = {
    // drive: driveShape.driveCardShape,
  }

  deleteMe = (e) => {
    e.preventDefault();
    // const { trip, deleteTrip } = this.props;
    // deleteTrip(trip.id, trip.routeId);
  }

  eatCandy = (candyId) => {
    candyData.eatCandy(candyId)
      .then(() => this.props.getCandy())
      .catch(err => console.error(err, 'unable to delete'));
  }

  render() {
    const { candy } = this.props;
    // const editLink = `/edit/${trip.id}`;
    return (
      <div className="DriveCard col-3">
        <div className="drive-card card">
          <div className="card-body">
            <h5 className="card-title">{candy.name}</h5>
            {/* <p className="card-text">{trip.startTime} to {trip.endTime}</p>
            <Link className="btn btn-warning" to={editLink}>Edit</Link> */}
            <button className="btn btn-danger" onClick={this.eatCandy}>x</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CandyCard;
