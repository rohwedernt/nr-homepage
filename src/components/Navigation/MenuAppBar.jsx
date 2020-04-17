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
  const { breakpointMd, setPrimaryColor } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openContactDialog, setOpenContactDialog] = React.useState(false);
  const [openSettingsDialog, setOpenSettingsDialog] = React.useState(false);
  const [openFullDialog, setOpenFullDialog] = useState(false);
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const openMenu = Boolean(anchorEl);

  const handleClickOpenAboutDialog = () => {
    handleCloseMenu();
    setOpenAboutDialog(true);
  };

  const handleCloseAboutDialog = () => {
    setOpenAboutDialog(false);
  };

  const handleClickOpenFullDialog = () => {
    handleCloseMenu();
    setOpenFullDialog(true);
  };

  const handleCloseFullDialog = () => {
    setOpenFullDialog(false);
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
              <Divider />
              <MenuItem onClick={handleClickOpenFullDialog}>Scrum Retro Tool</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Dashboard POC</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Jagged Paper Design</MenuItem>
              <MenuItem onClick={handleCloseMenu}>NateRohwederDotCom v1</MenuItem>
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
        text={`Welcome
        This space attempts to be hub of my development world. To truly accomplish that I will be working on getting as much content up as possible over the course of 2020. Ideally, that will include a healthy mix of my content (development side projects, music I've written and/or recorded, meals I've cooked, etc.) and content from all areas of my interests that I've held on to for one reason or another.
       
        While I hope to eventually get most or all of the development side projects I've been involved in onto the site, the site is itself the primary workspace for things I am learning/experimenting with and is the most comprehensive showcase of SPA development available at the moment. With that in mind, I'll do my best to give a thorough overview of NateRohwederDotCom's tech stack, architecture, sysOp setup, and CI/CD pipeline as well as some of the challenges and decisions faced along the way. 
       
        I doubt I'll ever get to a place where I consider this project finished. There is a long and ever growing list of cards on my kanban board and even if I'm able to widdle that down to near completion I will continue to use this app as the testing ground for new frameworks, libraries, languages, technologies, etc.
       
       Architecture
        NateRohwederDotCom is a fullstack serverless single page web application built with React and harnessing a series of cloud resources for its backend and database needs including a REST API and GraphQL. 
       
        The two primary technologies I wanted to use for this project were React and AWS. At the outset I still didn't have a great sense of just how much of this project could be managed in the cloud. The entire backend, db, CI/CD pipeline and DNS is in AWS and I only plan on digging deeper (analytics, logging, email, authentication and I18n are all on the roadmap).
       
        The 'managing' service is AWS Amplify which provides a git-based workflow for hosting web applications with continuous deployment. The static content is being stored in an S3 bucket and served up to the client via CloudFront. The app itself communicates with the API Gateway networking service which allows me to connect any back-end systems to the web app. Since this is a serverless architecture, all my backend logic is being run from a compute service called lambda. Just as the name implies, lambda allows me to run code without ever provisioning a server. 
       
        Amplify hooks directly into the project's github repository and monitors the master and qa branches for code commits. Instant cache invalidations ensure the app is updated on every code commit instantly. With each code change Amplify automatically provisions the necessary resources, builds the application according to my project's build config, runs tests, deploys and even runs a 'verify' step where screenshots of the app are generated with headless Chrome to ensure it renders well on different mobile resolutions. A comprehensive CI/CD pipeline that automatically scales, is trivial to set up, and is fully customizeable.`}
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
      />
      <SettingsDialog
        open={openSettingsDialog}
        handleClose={handleCloseSettingsDialog}
        setOpenAlert={setOpenAlert}
        setPrimaryColor={setPrimaryColor}
        breakpointMd={breakpointMd}
      />
      <FullAppDialog 
        open={openFullDialog}
        handleClose={handleCloseFullDialog}
        title='Retrospective Tool'
        description='This is a from-scratch tool used for managing custom retrospective formats for scrum teams.'
      />
    </div>
  );
}
