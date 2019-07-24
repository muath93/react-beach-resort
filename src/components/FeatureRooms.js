import React, { Component } from 'react';
import { RoomContext } from '../context/Context';
class FeatureRooms extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms } = this.context;
    console.log(featuredRooms);

    return <div>feature rooms </div>;
  }
}

export default FeatureRooms;
