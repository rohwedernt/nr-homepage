import React from 'react';

// custom components
import CustomDialogFullScreen from './CustomDialogFullScreen';

export default function FullAppDialog(props) {
    const { src, title, description, ...rest } = props;

    return (
        <CustomDialogFullScreen
            title={title}
            description={description}
            content={() => {}} // iframe here maybe? <iframe src={src}></iframe>
            {...rest}
        />
  );
}
