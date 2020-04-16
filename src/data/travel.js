import React from 'react';

// @material-ui/icons
import FlightIcon from '@material-ui/icons/Flight';

// data
import { CardTypes } from './cardTypes';

// assets
import breck2620 from '../assets/img/breck2-6-20.jpeg';
import austinTx from '../assets/img/austin-tx.jpeg';
import scottsdaleAZ from '../assets/img/scottsdale-az.jpeg';
import breck12620 from '../assets/img/breck1-26-20.jpeg';
import durham11720 from '../assets/img/durham1-17-20.jpeg';
import rmnp from '../assets/img/rmnp.jpeg';
import nederland92119 from '../assets/img/nederland9-21-19.jpeg';
import moab9219 from '../assets/img/moab9-2-19.jpeg';
import lairothebear82419 from '../assets/img/lairothebear8-24-19.jpeg';
import fortyeightfortyeightfest from '../assets/img/4848Fest.jpeg';
import boone62919 from '../assets/img/boone6-29-19.jpeg';
import neworleans32319 from '../assets/img/neworleans3-23-19.jpeg';
import fdgd19 from '../assets/img/fdgd19.jpeg';
import nye19 from '../assets/img/nye19.png';


export const travelSection = {
  label: 'travel',
  icon: <FlightIcon />,
  data: [
    {
      type: CardTypes.imgGallery,
      title: `Austin, TX`,
      desc: `2 | 16-18 | 2020`,
      img: austinTx,
      imgs: [nye19, fdgd19, boone62919, lairothebear82419]
    },
    {
      type: CardTypes.imgGallery,
      title: `Breckenridge, CO`,
      desc: `2 | 6-9 | 2020`,
      img: breck2620,
    },
    {
      type: CardTypes.imgGallery,
      title: `Scottsdale, AZ`,
      desc: `2 | 1-4 | 2020`,
      img: scottsdaleAZ
    },
    {
      type: CardTypes.imgGallery,
      title: `Breckenridge, CO`,
      desc: `1 | 26-27 | 2020`,
      img: breck12620
    },
    {
      type: CardTypes.imgGallery,
      title: `Durham, NC`,
      desc: `1 | 5-18 | 2020`,
      img: durham11720
    },
    {
      type: CardTypes.imgGallery,
      title: `Rocky Mtn Ntl Park, CO`,
      desc: `10 | 5 | 2019`,
      img: rmnp,
    },
    {
      type: CardTypes.imgGallery,
      title: `Nederland, CO`,
      desc: ` 9 | 21 | 2019`,
      img: nederland92119,
    },
    {
      type: CardTypes.imgGallery,
      title: `Moab, UT`,
      desc: `9 | 1-7 | 2019`,
      img: moab9219,
    },
    {
      type: CardTypes.imgGallery,
      title: `Lair O' The Bear, CO`,
      desc: `8 | 24 | 2019`,
      img: lairothebear82419,
    },
    {
      type: CardTypes.imgGallery,
      title: `4848 Fest, WV`,
      desc: `7 | 11-14 | 2019`,
      img: fortyeightfortyeightfest,
    },
    {
      type: CardTypes.imgGallery,
      title: `Western NC`,
      desc: `6 | 28 - 7 | 2 | 2019`,
      img: boone62919,
    },
    {
      type: CardTypes.imgGallery,
      title: `New Orleans, LA`,
      desc: `3 | 21 - 24 | 2019`,
      img: neworleans32319,
    },
    {
      type: CardTypes.imgGallery,
      title: `Frozen Dead Guy Days '19`,
      desc: `3 | 8 - 10 | 2019`,
      img: fdgd19,
    },
    {
      type: CardTypes.imgGallery,
      title: `Atlanta, GA`,
      desc: `12 | 30 | 2018 - 1 | 3 | 2019`,
      img: nye19,
    }
  ]
}
