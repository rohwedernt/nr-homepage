import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    dialogContent: {
        minWidth: '600px'
    }
}));

export default function MenuAppBar(props) {
    const classes = useStyles();
    const {open, handleClose, setOpenAlert, toggleHeightForAlert } = props;

    return (
        <Dialog 
            open={open} 
            onClose={handleClose} 
            aria-labelledby="form-dialog-title"
            maxWidth='md'
        >
            <DialogTitle id="form-dialog-title">Contact</DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <TextField
                    id="outlined-multiline-static"
                    label="Email me"
                    multiline
                    rows={8}
                    variant="outlined"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button 
                    onClick={() => {
                        handleClose();
                        setOpenAlert(true);
                        toggleHeightForAlert();
                    }} 
                    color="primary"
                >
                    Send
                </Button>
            </DialogActions>
        </Dialog>
  );
}
