import React, { Component, createContext } from 'react';
import items from '../data';
const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
  }

  formatData = data => {
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const image = item.fields.images.map(image => image.fields.file.url);
      const rooms = { ...item.fields, image, id };
      return rooms;
    });
    return tempItems;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomContext, RoomConsumer };
