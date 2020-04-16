import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

// @material-ui/lab components
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  alert: {
      borderRadius: '0px'
  }
}));

export default function SuccessAlert(props) {
  const classes = useStyles();
  const { openAlert, setOpenAlert, toggleHeightForAlert, msg } = props;

    return (
        <div className={classes.root}>
            <Collapse in={openAlert}>
            <Alert
                className={classes.alert}
                variant='filled' 
                action={
                    <IconButton
                        aria-label='close'
                        color='inherit'
                        size='small'
                        onClick={() => {
                            setOpenAlert(false);
                            toggleHeightForAlert();
                        }}
                    >
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }
            >
                {msg}
            </Alert>
            </Collapse>
        </div>
    );
}
