import React from 'react';
import Room from './Room';

const RoomsList = ({ rooms }) => {
  if (!rooms.length) {
    return (
      <div className="empty-search">
        <h3>Sorry, there is no room matchs your search</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
