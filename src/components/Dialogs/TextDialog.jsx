import React from 'react';

// custom components
import CustomDialog from './CustomDialog';

// data
import { AboutThisSite } from '../../data/AboutThisSite.js';

export default function TextDialog(props) {
    const { text, ...rest } = props;

    return (
        <CustomDialog
            confirmText='Close'
            confirmFunc={() => {}}
            content={() => <AboutThisSite />}
            removeClose
            {...rest}
        />
  );
}
