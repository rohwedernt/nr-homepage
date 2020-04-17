import React from 'react';

// custom components
import CustomDialog from './CustomDialog';


export default function TextDialog(props) {
    const { content, ...rest } = props;

    return (
        <CustomDialog
            confirmText='Close'
            confirmFunc={() => {}}
            content={() => content}
            removeClose
            {...rest}
        />
  );
}
