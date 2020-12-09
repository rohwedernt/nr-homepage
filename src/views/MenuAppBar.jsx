import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Divider } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';

// custom components
import CustomDialogFullScreen from '../components/Dialogs/CustomDialogFullScreen';
import CustomDialog from '../components/Dialogs/CustomDialog';
import SuccessAlert from '../components/Alerts/SuccessAlert';
import SettingsDialogContent from '../components/Dialogs/DialogContent/SettingsDialogContent';
import EmailDialogContent from '../components/Dialogs/DialogContent/EmailDialogContent';
import { AboutThisSite } from './Content/AboutThisSite';
import { ComingSoon } from './Content/ComingSoon';


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

function HideOnScroll(props) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} in={!trigger}>
      {props.children}
    </Slide>
  );
}

export default function MenuAppBar(props) {
  const classes = useStyles();
  const { breakpointMd, breakpointSm, handleThemeChange, themeColor, setThemeColor, themeType, setThemeType, onAdmin } = props;

  // success alert state
  const [openAlert, setOpenAlert] = useState(false);

  // 'more stuff' popover menu
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // regular dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogProps, setDialogProps] = useState({ title: '', description: '', content: () => {}});
  const handleOpenDialog = (data) => {
    setDialogProps(data);
    handleCloseMenu();
    setOpenDialog(true);
  };
  const handleCloseDialog = () => setOpenDialog(false);

  // full screen dialog
  const [openDialogFull, setOpenDialogFull] = useState(false);
  const [dialogFullProps, setDialogFullProps] = useState({ title: '', description: '', content: () => {}});
  const handleOpenDialogFull = (data) => {
    setDialogFullProps(data);
    handleCloseMenu();
    setOpenDialogFull(true);
  };
  const handleCloseDialogFull = () => setOpenDialogFull(false);

  // Menu item props
  const aboutThisSiteProps = { 
    content: () => <AboutThisSite />
  };

  const comingSoonProps = {
    title: 'Features and Content on the Horizon',
    content: () => <ComingSoon />
  };

  const scrumRetroToolProps = {
    title: 'Scrum Retro Tool',
    description: 'This is a from-scratch tool used for managing custom retrospective formats for scrum teams.',
    content: () => {}
  };

  const dashboardProps = {
    title: 'Dashboard POC',
    description: 'This is a simple test app for showcasing some dashboard components I was interested in. Eventually I hope to hook this up to real data collected by AWS Kinesis.',
    content: () => {}
  };

  const nrV1Props = {
    title: 'NateRohwederDotCom v1',
    description: 'Over time as the site evolves I want to be able to showcase past versions of the site. This was the first iteration, enjoy.',
    content: () => {}
  };

  const contactProps = {
    title: 'Contact',
    confirmText: 'Save',
    confirmFunc: () => setOpenAlert(true),
    content: () => <EmailDialogContent />,
    cancel: true
  };

  const settingsProps = {
    title: 'Settings',
    content: () => <SettingsDialogContent 
      handleThemeChange={handleThemeChange}
      themeColor={themeColor}
      setThemeColor={setThemeColor}
      themeType={themeType}
      setThemeType={setThemeType}
    />
  };

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar style={{ justifyContent: 'space-between'}}>
            {onAdmin ? (
              <IconButton
                component={Link}
                to={'/'}
                color='inherit'
                className={classes.back}
              >
                <HomeIcon />
              </IconButton>
            ) : (
              <Fragment>
                <IconButton
                  aria-label='more stuff'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleMenu}
                  color='inherit'
                  className={classes.menuIcon}
                >
                  {/* <Typography style={{ marginRight: '10px' }} variant='subtitle1'>More Stuff</Typography> */}
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  keepMounted
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={openMenu}
                  onClose={handleCloseMenu}
                >
                  <MenuItem onClick={() => handleOpenDialogFull(scrumRetroToolProps)}>Scrum Retro Tool</MenuItem>
                  <MenuItem onClick={() => handleOpenDialogFull(dashboardProps)}>Dashboard POC</MenuItem>
                  <MenuItem onClick={() => handleOpenDialogFull(nrV1Props)}>NateRohwederDotCom v1</MenuItem>
                  <Divider />
                  <MenuItem onClick={() => handleOpenDialog(comingSoonProps)}>Coming Soon</MenuItem>
                  <MenuItem component={Link} to={'/admin'}>Admin</MenuItem>
                </Menu>
              </Fragment>
            )}
            {!onAdmin && <div>
              <IconButton
                onClick={() => handleOpenDialog(aboutThisSiteProps)}
                color='inherit'
                className={classes.menuIcon}
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                onClick={() => handleOpenDialog(contactProps)}
                color='inherit'
                className={classes.menuIcon}
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                onClick={() => handleOpenDialog(settingsProps)}
                color='inherit'
                className={classes.menuIcon}
              >
                <SettingsIcon />
              </IconButton>
            </div>}
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
        comingSoon
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
