import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../context/Context';
import StyledHero from '../components/StyledHero';
import defaultBcg from '../images/room-1.jpeg';

class SingleRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    // handel if room is undefined
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found ...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      image
    } = room;
    console.log(image);

    return (
      <StyledHero img={image[0]}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}

export default SingleRoom;
