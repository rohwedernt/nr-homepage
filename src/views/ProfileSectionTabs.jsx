import React, { Fragment, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// @material-ui/icons
import CodeIcon from '@material-ui/icons/Code';
import MusicIcon from '@material-ui/icons/Audiotrack';
import FlightIcon from '@material-ui/icons/Flight';
import FoodIcon from '@material-ui/icons/LocalDining';
// import AstronomyIcon from '@material-ui/icons/Public';

// custom components
import CustomDialogFullScreen from '../components/Dialogs/CustomDialogFullScreen';
import ImageGalleryDialogContent from '../components/Dialogs/DialogContent/ImageGalleryDialogContent';

// containers
import DevContainer from './Containers/DevContainer'
// import AstronomyContainer from './Containers/AstronomyContainer'
import TravelContainer from './Containers/TravelContainer'
import FoodAndDrinkContainer from './Containers/FoodAndDrinkContainer'

// layouts
import MusicTabPanel from './TabPanels/MusicTabPanel';


const useStyles = makeStyles((theme) => ({
  root: {
    margin: '60px auto',
    flexGrow: 1,
    width: '100%',
    '& .MuiTab-root:hover': {
        color: theme.palette.primary.main
    },
    '& .MuiTabs-flexContainer': {
      justifyContent: 'center'
    },
  }
}));

export default function ProfileSectionTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [dialogItem, setDialogItem] = useState({});
  const [openFullDialog, setOpenFullDialog] = useState(false);

  const { breakpointMd } = props;

  const handleClickOpenFullDialog = (item) => {
    setDialogItem(item)
    setOpenFullDialog(true);
  };

  const handleCloseFullDialog = () => {
    setOpenFullDialog(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  let tabStyle = breakpointMd ? { minWidth: '40px' } : undefined;

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position='static' color={'transparent'} elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
          >
            <Tab style={tabStyle} icon={<CodeIcon />} label={breakpointMd ? '' : 'Dev'} />
            <Tab style={tabStyle} icon={<MusicIcon />} label={breakpointMd ? '' : 'Music'} />
            <Tab style={tabStyle} icon={<FlightIcon />} label={breakpointMd ? '' : 'Travel'} />
            <Tab style={tabStyle} icon={<FoodIcon />} label={breakpointMd ? '' : 'Food & Drink'} />
            {/* <Tab style={tabStyle} icon={<AstronomyIcon />} label={breakpointMd ? '' : 'Astronomy'} /> */}
          </Tabs>
        </AppBar>
        <SwipeableViews axis={'x'} index={value} onChangeIndex={handleChangeIndex} >
          <DevContainer value={value} idx={0} />
          <MusicTabPanel value={value} idx={1} />
          <TravelContainer value={value} idx={2} openDialog={handleClickOpenFullDialog} />
          <FoodAndDrinkContainer value={value} idx={3} openDialog={handleClickOpenFullDialog}  />
          {/* <AstronomyContainer value={value} idx={4}/> */}
        </SwipeableViews>
      </div>
      <CustomDialogFullScreen 
        open={openFullDialog}
        handleClose={handleCloseFullDialog}
        content={() => <ImageGalleryDialogContent item={dialogItem} />}
        item={dialogItem}
      />
    </Fragment>
  );
}
