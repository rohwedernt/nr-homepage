import React from 'react';

// @material-ui/icons
import FoodIcon from '@material-ui/icons/LocalDining';

// data
import { CardTypes } from './cardTypes';

// assets
import odellIpa from '../assets/img/odell-ipa.jpeg';
import allagashTiarna from '../assets/img/allagash-tiarna.jpeg'
import placeholder from '../assets/img/placeholder.png';


export const foodAndDrinkSection = {
  label: 'food & drink',
  icon: <FoodIcon />,
  data: [
    {
      type: CardTypes.url,
      title: `Odell IPA`,
      desc: `Pale and Vienna malts along with 9 different US hop varieties`,
      img: odellIpa,
      url: 'https://www.beeradvocate.com/beer/profile/267/35626/'
    },
    {
      type: CardTypes.imgGallery,
      title: `Allagash Tiarna 2015`,
      desc: `Tiarna is a blend of two beers, one aged in oak and fermented with 100% brettanomyces and the other fermented in stainless with a blend of two belgian yeast strains. `,
      img: allagashTiarna,
      url: 'https://www.beeradvocate.com/beer/profile/4/108535/'
    },
    {
      type: CardTypes.imgGallery,
      title: `Test Title`,
      desc: `Description here`,
      img: placeholder
    },
    {
      type: CardTypes.imgGallery,
      title: `Test Title`,
      desc: `Description here`,
      img: placeholder
    },
    {
      type: CardTypes.imgGallery,
      title: `Test Title`,
      desc: `Description here`,
      img: placeholder
    },
    {
      type: CardTypes.imgGallery,
      title: `Test Title`,
      desc: `Description here`,
      img: placeholder
    }
  ]
}
  