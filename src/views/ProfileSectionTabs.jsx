import React, { Fragment, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// custom components
import CustomDialogFullScreen from '../components/Dialogs/CustomDialogFullScreen';
import ImageGalleryDialogContent from '../components/Dialogs/DialogContent/ImageGalleryDialogContent';

// layouts
import WorkTabPanel from './TabPanels/WorkTabPanel';
import MusicTabPanel from './TabPanels/MusicTabPanel';
import TravelTabPanel from './TabPanels/TravelTabPanel';
import FoodAndDrinkTabPanel from './TabPanels/FoodAndDrinkTabPanel';
import AstronomyTabPanel from './TabPanels/AstronomyTabPanel';

// data
import { workSection } from '../data/work';
import { musicSection } from '../data/music';
import { travelSection } from '../data/travel';
import { foodAndDrinkSection } from '../data/foodAndDrink';
import { astronomySection } from '../data/astronomy';


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
  const [dialogProps, setDialogProps] = useState({ imgs: [], title: '', description: '' });
  const [openFullDialog, setOpenFullDialog] = useState(false);

  const sections = [workSection, musicSection, travelSection, foodAndDrinkSection, astronomySection];

  const handleClickOpenFullDialog = (imgs, title, description) => {
    setDialogProps({ imgs: imgs, title: title, description: description })
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
            {sections.map((section, idx) => <Tab key={idx} style={props.style} icon={section.icon} label={props.style ? '': section.label} />)}
          </Tabs>
        </AppBar>
        <SwipeableViews axis={'x'} index={value} onChangeIndex={handleChangeIndex} >
          <WorkTabPanel value={value} idx={0} />
          <MusicTabPanel value={value} idx={1} />
          <TravelTabPanel value={value} idx={2} openDialog={handleClickOpenFullDialog} />
          <FoodAndDrinkTabPanel value={value} idx={3} />
          <AstronomyTabPanel value={value} idx={4} />
        </SwipeableViews>
      </div>
      <CustomDialogFullScreen 
        open={openFullDialog}
        handleClose={handleCloseFullDialog}
        content={() => <ImageGalleryDialogContent imgs={dialogProps.imgs} />}
        {...dialogProps}
      />
    </Fragment>
  );
}
