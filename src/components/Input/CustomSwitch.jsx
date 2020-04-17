import React, { useState } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    label: {
      color: theme.palette.primary.main,
      '& .MuiFormControlLabel-label': {
          textTransform: 'uppercase',
          fontWeight: 500,
          fontSize: '0.875rem'
      }
    }
  }));

export default function SwitchLabels() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)

  const handleChange = () => setChecked(!checked);

  return (
    <FormGroup row>
      <FormControlLabel className={classes.label}
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name="filterToMyStuff"
            color="primary"
          />
        }
        label="Created by me"
      />
    </FormGroup>
  );
}