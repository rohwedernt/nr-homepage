import React, { useState } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// custom components
import CustomDialogFullScreen from '../components/Dialogs/CustomDialogFullScreen';
import CustomDialog from '../components/Dialogs/CustomDialog';
import SuccessAlert from '../components/Alerts/SuccessAlert';
import HamburgerMenu from './MenuSections/HamburgerMenu';
import MenuIconButtons from './MenuSections/MenuIconButtons';
import HideOnScroll from '../components/Animators/HideOnScroll';
//import { Nrdcv1 } from 'nrdcv1';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiIconButton-root:hover': {
      backgroundColor: 'rgba(0,0,0,0.2)'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  back: {
    //flexGrow: 1,
    borderRadius: '8px',
  },
  menuIcon: {
	  borderRadius: '8px',
  }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const { breakpointMd, breakpointSm } = props;
  const [openAlert, setOpenAlert] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleCloseMenu = () => setAnchorEl(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogProps, setDialogProps] = useState({ title: '', description: '', content: () => {}});
  const handleCloseDialog = () => setOpenDialog(false);
  const [openDialogFull, setOpenDialogFull] = useState(false);
  const [dialogFullProps, setDialogFullProps] = useState({ title: '', description: '', content: () => {}});
  const handleCloseDialogFull = () => setOpenDialogFull(false);

  const handleOpenDialog = (data) => {
    setDialogProps(data);
    handleCloseMenu();
    setOpenDialog(true);
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-between'}}>
            <HamburgerMenu 
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              setDialogFullProps={setDialogFullProps}
              handleCloseMenu={handleCloseMenu}
              setOpenDialogFull={setOpenDialogFull}
              handleOpenDialog={handleOpenDialog}
            />
            <MenuIconButtons 
              handleOpenDialog={handleOpenDialog}
            />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <SuccessAlert
        msg='Success!'
        open={openAlert}
        setOpenAlert={setOpenAlert}
      />
      <CustomDialogFullScreen 
        open={openDialogFull}
        handleClose={handleCloseDialogFull}
        {...dialogFullProps}
      />
      <CustomDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        breakpointSm={breakpointSm}
        breakpointMd={breakpointMd}
        {...dialogProps}
      />
    </div>
  );
}
