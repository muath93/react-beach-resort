import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Hero from '../components/Hero';
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
      images
    } = room;
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((image, i) => {
              return <img key={i} src={image} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p> {description} </p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowd' : 'no pets allowd'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <ul className="extras">
            {extras.map((item, i) => {
              return <li key={i}>- {item} </li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
