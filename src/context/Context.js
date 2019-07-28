import React, { Component, createContext } from 'react';
import items from '../data';
const RoomContext = createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured);
    const maxPrice = Math.max(rooms.reduce((acc, room) => room.price), 0);
    const maxSize = Math.max(rooms.reduce((acc, room) => room.size), 0);

    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData = data => {
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);
      const rooms = { ...item.fields, images, id };
      return rooms;
    });
    return tempItems;
  };

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handelChange = e => {
    const target = e.target;
    const value = e.target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    const {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    let tempRooms = [...rooms];
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handelChange: this.handelChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomContext, RoomConsumer };
