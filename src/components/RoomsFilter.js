import React, { useContext } from 'react';
import { RoomContext } from '../context/Context';
import Title from './Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomsFilter = ({ rooms }) => {
  // used context
  const context = useContext(RoomContext);
  const {
    handelChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  //   get unique types
  let types = getUnique(rooms, 'type');
  //   add all to types
  types = ['all', ...types];
  //   map it to jsx
  types = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handelChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
};

export default RoomsFilter;
