import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaParking } from 'react-icons/fa';
import Title from '../components/Title';
class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: 'Free Cocktail',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!'
      },
      {
        icon: <FaHiking />,
        title: 'Endless Hiking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!'
      },
      {
        icon: <FaShuttleVan />,
        title: 'Free Riding',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!'
      },
      {
        icon: <FaParking />,
        title: 'Free Parking',
        info:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, libero!'
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((service, i) => {
            return (
              <article key={i} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p> {service.info} </p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
