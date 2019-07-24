import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeatureRooms from '../components/FeatureRooms';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurios rooms" subtitle="deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </>
  );
};

export default Home;
