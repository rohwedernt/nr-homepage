import React from 'react';

// @material-ui/icons
import AstronomyIcon from '@material-ui/icons/Public';

// data
import { CardTypes } from './cardTypes';

// assets
import nasaExoplanet from '../assets/img/nasa-exoplanet.jpg';
import spaceX from '../assets/img/space-x-next-starship.jpeg';


export const astronomySection = {
  label: 'astronomy',
  icon: <AstronomyIcon />,
  data: [
    {
      type: CardTypes.url,
      title: `NASA to photo surface of exoplanet`,
      desc: `Our galaxy is potentially full of habitable planets.`,
      img: nasaExoplanet,
      url: 'https://www.wired.com/story/nasa-wants-to-photograph-the-surface-of-an-exoplanet/'
    },
    {
      type: CardTypes.url,
      title: `SpaceX Prototype`,
      desc: `SpaceX’s next Starship prototype is already closing in on its first tests`,
      img: spaceX,
      url: 'https://www.teslarati.com/spacex-next-starship-prototype-sn4-first-tests/'
    }
  ]
}
  