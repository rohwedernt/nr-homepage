import React from 'react';

// @material-ui/icons
import FoodIcon from '@material-ui/icons/LocalDining';

// data
import { CardTypes } from './cardTypes';

// assets
import allagashTiarna from '../assets/img/allagash-tiarna.jpeg'


export const foodAndDrinkSection = {
  label: 'food & drink',
  icon: <FoodIcon />,
  data: [
    {
      type: CardTypes.imgGallery,
      title: `Allagash Tiarna 2015`,
      desc: `Tiarna is a blend of two beers, one aged in oak and fermented with 100% brettanomyces and the other fermented in stainless with a blend of two belgian yeast strains. `,
      img: allagashTiarna,
      url: 'https://www.beeradvocate.com/beer/profile/4/108535/'
    }
  ]
}
  