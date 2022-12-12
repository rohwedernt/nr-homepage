import React, { useState, useEffect } from 'react';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';

const EmailDialog = React.memo((props) => {
    const { setEmailContent } = props;
    const [value, setValue] = useState('');

    // useEffect(() => {
    //     setEmailContent(value);
    //   }, [setEmailContent, value]);

    const handleChange = (event) => {
        const val = event.target.value;
        setValue(val);
        setEmailContent(val);
    };

    return (
        <TextField
            id='outlined-multiline-static'
            label='Send me an email'
            onChange={handleChange}
            value={value}
            multiline
            rows={8}
            variant='outlined'
            fullWidth
        />
  );
});

export default EmailDialog;
