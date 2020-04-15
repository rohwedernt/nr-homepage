import React from 'react';

// @material-ui/icons
import MusicIcon from '@material-ui/icons/Audiotrack';

// data
import { CardTypes } from './cardTypes';

// assets
import umphreys from '../assets/img/ump.jpg';
import snarky from '../assets/img/snarky.jpg';
import ttb from '../assets/img/ttb.jpg';
import sturgill from '../assets/img/sturgill.jpg'
import billy from '../assets/img/billy.jpg'

export const musicSection = {
  label: 'music',
  icon: <MusicIcon />,
  data: [
    {
      type: CardTypes.url,
      title: `Umphrey's Mcgee`,
      desc: `This is a description about the card that is a band that shreds the gnar`,
      img: umphreys,
      url: 'https://allthings.umphreys.com/'
    },
    {
      type: CardTypes.url,
      title: `Snarky Puppy`,
      desc: `This is a description about the card that is a band that melts faces`,
      img: snarky,
      url: 'https://snarkypuppy.com/'
    },
    {
      type: CardTypes.url,
      title: `Tedeschi Trucks Band`,
      desc: `This is a description about the card that is a band that is epic af`,
      img: ttb,
      url: 'https://www.tedeschitrucksband.com/'
    },
    {
      type: CardTypes.url,
      title: `Sturgill Simpson`,
      desc: `Another band description here`,
      img: sturgill,
      url: 'https://www.sturgillsimpson.com/'
    },
    {
      type: CardTypes.url,
      title: `Billy Strings`,
      desc: `Billy Strings is an American guitarist and bluegrass musician.`,
      img: billy,
      url: 'https://billystrings.com/'
    }
  ]
}