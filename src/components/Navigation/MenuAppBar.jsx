import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Divider } from "@material-ui/core";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";

// cust components
import SuccessAlert from "../Alerts/SuccessAlert";
import CustomDialog from "../Dialogs/CustomDialog";

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
  const { toggleHeightForAlert, bkptMd } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const openMenu = Boolean(anchorEl);

  const handleClickOpen = () => {
    handleCloseMenu();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}></Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
			        color="inherit"
			        className={classes.hamburger}
            >
				<Typography style={{ marginRight: '10px' }} variant='subtitle1'>More Stuff</Typography>
				<MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openMenu}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>Retrospective Tool</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Dashboard Example</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Jagged Paper Design</MenuItem>
              <MenuItem onClick={handleCloseMenu}>NateRohwederDotCom v1</MenuItem>
              <Divider />
              <MenuItem onClick={handleClickOpen}>Contact</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Settings</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <SuccessAlert
        msg="Email Sent!"
        openAlert={openAlert}
        setOpenAlert={setOpenAlert}
        toggleHeightForAlert={props.toggleHeightForAlert}
      />
      <CustomDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        setOpenAlert={setOpenAlert}
        toggleHeightForAlert={toggleHeightForAlert}
        bkptMd={bkptMd}
      />
    </div>
  );
}
