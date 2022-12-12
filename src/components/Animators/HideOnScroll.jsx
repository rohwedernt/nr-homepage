import React from 'react';

// @material-ui/core components
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


export default function HideOnScroll(props) {
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} in={!trigger}>
        {props.children}
      </Slide>
    );
}
