import React, { useState } from 'react';

// @material-ui/core components
import TextField from '@material-ui/core/TextField';

export default function EmailDialog(props) {
    const [value, setValue] = useState('');
    const handleChange = (event) => setValue(event.target.value);

    return (
        <TextField
            id='outlined-multiline-static'
            label='Coming Soon!'
            onChange={handleChange}
            value={value}
            multiline
            rows={8}
            variant='outlined'
            fullWidth
            disabled
        />
  );
}
