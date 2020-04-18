import React, { useState } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Divider } from '@material-ui/core';

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';

// cust components
import SuccessAlert from '../Alerts/SuccessAlert';
import TextDialog from '../Dialogs/TextDialog';
import EmailDialog from '../Dialogs/EmailDialog';
import SettingsDialog from '../Dialogs/SettingsDialog';
import FullAppDialog from '../Dialogs/FullAppDialog';

import { AboutThisSite } from '../../data/AboutThisSite';
import { ComingSoon } from '../../data/ComingSoon';


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
  title: {
    flexGrow: 1,
  },
  hamburger: {
	  borderRadius: '8px',
  }
}));

export default function MenuAppBar(props) {
  const { breakpointMd, breakpointSm, setPrimaryColor } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openContactDialog, setOpenContactDialog] = React.useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = React.useState(false);
  const [openRetroDialog, setOpenRetroDialog] = useState(false);
  const [openDashboardDialog, setOpenDashboardDialog] = useState(false);
  const [openV1Dialog, setOpenV1Dialog] = useState(false);
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [openComingSoonDialog, setOpenComingSoonDialog] = useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const openMenu = Boolean(anchorEl);

  const handleClickOpenAboutDialog = () => {
    handleCloseMenu();
    setOpenAboutDialog(true);
  };

  const handleCloseAboutDialog = () => {
    setOpenAboutDialog(false);
  };

  const handleClickOpenComingSoonDialog = () => {
    handleCloseMenu();
    setOpenComingSoonDialog(true);
  };

  const handleCloseComingSoonDialog = () => {
    setOpenComingSoonDialog(false);
  };

  const handleClickOpenRetroDialog = () => {
    handleCloseMenu();
    setOpenRetroDialog(true);
  };

  const handleCloseRetroDialog = () => {
    setOpenRetroDialog(false);
  };

  const handleClickOpenDashboardDialog = () => {
    handleCloseMenu();
    setOpenDashboardDialog(true);
  };

  const handleCloseDashboardDialog = () => {
    setOpenDashboardDialog(false);
  };

  const handleClickOpenV1Dialog = () => {
    handleCloseMenu();
    setOpenV1Dialog(true);
  };

  const handleCloseV1Dialog = () => {
    setOpenV1Dialog(false);
  };

  const handleOpenContactDialog = () => {
    handleCloseMenu();
    setOpenContactDialog(true);
  };

  const handleCloseContactDialog = () => {
    setOpenContactDialog(false);
  };

  const handleOpenSettingsDialog = () => {
    handleCloseMenu();
    setOpenSettingsDialog(true);
  };

  const handleCloseSettingsDialog = () => {
    setOpenSettingsDialog(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}></Typography>
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
			        color='inherit'
			        className={classes.hamburger}
            >
				<Typography style={{ marginRight: '10px' }} variant='subtitle1'>More Stuff</Typography>
				<MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={openMenu}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleClickOpenAboutDialog}>About This Site</MenuItem>
              <MenuItem onClick={handleClickOpenComingSoonDialog}>Coming Soon</MenuItem>
              <Divider />
              <MenuItem onClick={handleClickOpenRetroDialog}>Scrum Retro Tool</MenuItem>
              <MenuItem onClick={handleClickOpenDashboardDialog}>Dashboard POC</MenuItem>
              <MenuItem onClick={handleClickOpenV1Dialog}>NateRohwederDotCom v1</MenuItem>
              <Divider />
              <MenuItem onClick={handleOpenContactDialog}>Contact</MenuItem>
              <MenuItem onClick={handleOpenSettingsDialog}>Settings</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <TextDialog
        open={openAboutDialog}
        handleClose={handleCloseAboutDialog}
        content={<AboutThisSite />}
        breakpointMd={breakpointMd}
        breakpointSm={breakpointSm}

      />
      <TextDialog
        open={openComingSoonDialog}
        handleClose={handleCloseComingSoonDialog}
        dialogTitle='Features and Content on the Horizon'
        content={<ComingSoon />}
        breakpointMd={breakpointMd}
        breakpointSm={breakpointSm}
      />
      <SuccessAlert
        msg='Success!'
        open={openAlert}
        setOpenAlert={setOpenAlert}
      />
      <EmailDialog
        open={openContactDialog}
        handleClose={handleCloseContactDialog}
        setOpenAlert={setOpenAlert}
        breakpointMd={breakpointMd}
        breakpointSm={breakpointSm}
      />
      <SettingsDialog
        open={openSettingsDialog}
        handleClose={handleCloseSettingsDialog}
        setOpenAlert={setOpenAlert}
        setPrimaryColor={setPrimaryColor}
        breakpointMd={breakpointMd}
        breakpointSm={breakpointSm}
      />
      <FullAppDialog 
        open={openRetroDialog}
        handleClose={handleCloseRetroDialog}
        title='Retrospective Tool'
        description='This is a from-scratch tool used for managing custom retrospective formats for scrum teams.'
        comingSoon
      />
      <FullAppDialog 
        open={openDashboardDialog}
        handleClose={handleCloseDashboardDialog}
        title='Dashboard POC'
        description='This is a from-scratch tool used for managing custom retrospective formats for scrum teams.'
        comingSoon
      />
      <FullAppDialog 
        open={openV1Dialog}
        handleClose={handleCloseV1Dialog}
        title='NateRohwederDotCom v1'
        description='This is a from-scratch tool used for managing custom retrospective formats for scrum teams.'
        comingSoon
      />
    </div>
  );
}
