import React from 'react';
import { RoomConsumer } from '../context/Context';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';

const RoomsContainer = () => {
  return (
    //   context with functional components
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        return loading ? (
          <Loading />
        ) : (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
};
export default RoomsContainer;
