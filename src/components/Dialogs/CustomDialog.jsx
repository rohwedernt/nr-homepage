import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(() => ({
    dialogContent: {
        wordWrap: 'break-word'
    }
}));

export default function CustomDialog(props) {
    const classes = useStyles();
    const { title, confirmText, confirmFunc, content, breakpointMd, breakpointSm, open, handleClose, cancel } = props;
    const getDialogStyles = () => {
        if (breakpointSm) return { minWidth: '250px' };
        else if (breakpointMd) return { minWidth: '300px' };
        else { return { minWidth: '600px'}};
    }

    return (
        <Dialog 
            open={open} 
            onClose={handleClose} 
            aria-labelledby='form-dialog-title'
            maxWidth='md'
            scroll={'paper'}
        >
            {title && <DialogTitle style={{ paddingBottom: '0px' }} id='form-dialog-title'>{title}</DialogTitle>}
            <DialogContent className={classes.dialogContent} style={getDialogStyles()}>
                {content()}
            </DialogContent>
            <DialogActions>
                {cancel && (
                    <Button onClick={handleClose} color='primary'>
                        Cancel
                    </Button>
                )}
                <Button 
                    onClick={() => {
                        handleClose();
                        confirmFunc && confirmFunc();
                    }} 
                    color='primary'
                >
                    {confirmText ? confirmText : 'Close'}
                </Button>
            </DialogActions>
        </Dialog>
  );
}
