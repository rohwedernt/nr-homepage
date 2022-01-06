import React, { Fragment } from 'react';
// import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Divider } from '@material-ui/core';

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

// Custom Components
import AstronomyContainer from '../Containers/AstronomyContainer';
import ComingSoon from '../Content/ComingSoon';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiIconButton-root:hover': {
      backgroundColor: 'rgba(0,0,0,0.2)'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default function HamburgerMenu(props) {
  const classes = useStyles();
  const { anchorEl, setAnchorEl, onAdmin, setDialogFullProps, handleCloseMenu, handleOpenDialog, setOpenDialogFull } = props;
  const openMenu = Boolean(anchorEl);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);

  const handleOpenDialogFull = (data) => {
    setDialogFullProps(data);
    handleCloseMenu();
    setOpenDialogFull(true);
  };

  const nasaApiProps = {
    title: 'NASA Globe API Example',
    description: 'A simple rendering of the interactive globe available from the NASA API',
    content: () => <AstronomyContainer />,
    comingSoon: false
  };

  const scrumRetroToolProps = {
    title: 'Scrum Retro Tool',
    description: 'This is a from-scratch tool used for managing custom retrospective formats for scrum teams.',
    content: () => {},
    comingSoon: true
  };

  const dashboardProps = {
    title: 'Dashboard POC',
    description: 'This is a simple test app for showcasing some dashboard components I was interested in. Eventually I hope to hook this up to real data collected by AWS Kinesis.',
    content: () => {},
    comingSoon: true
  };

  const nrV1Props = {
    title: 'NateRohwederDotCom v1',
    description: 'Over time as the site evolves I want to be able to showcase past versions of the site. This was the first iteration, enjoy.',
    content: () => {},
    comingSoon: true
  };

  const comingSoonProps = {
    title: 'Features and Content Coming Soon',
    content: () => <ComingSoon />
  };

  return (
    onAdmin ? (
      <IconButton
        //component={Link}
        to={"/"}
        color="inherit"
        className={classes.back}
      >
        <HomeIcon />
      </IconButton>
    ) : (
      <Fragment>
        <IconButton
          aria-label="more stuff"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="secondary"
          className={classes.menuIcon}
        >
          {/* <Typography style={{ marginRight: '10px' }} variant='subtitle1'>More Stuff</Typography> */}
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={openMenu}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={() => handleOpenDialogFull(nasaApiProps)}>
            NASA Interactive Globe
          </MenuItem>
          <MenuItem onClick={() => handleOpenDialogFull(scrumRetroToolProps)}>
            Scrum Retro Tool
          </MenuItem>
          <MenuItem onClick={() => handleOpenDialogFull(dashboardProps)}>
            Dashboard POC
          </MenuItem>
          <MenuItem onClick={() => handleOpenDialogFull(nrV1Props)}>
            NateRohwederDotCom v1
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => handleOpenDialog(comingSoonProps)}>
            Coming Soon
          </MenuItem>
          {/* <MenuItem component={Link} to={'/admin'}>Admin</MenuItem> */}
        </Menu>
      </Fragment>
    ));
}
