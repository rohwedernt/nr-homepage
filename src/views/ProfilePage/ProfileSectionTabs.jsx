import React, { Fragment, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// custom components
import ImageGalleryDialog from '../../components/Dialogs/ImageGalleryDialog';

// layouts
import WorkTabPanel from './TabPanels/WorkTabPanel';
import MusicTabPanel from './TabPanels/MusicTabPanel';
import TravelTabPanel from './TabPanels/TravelTabPanel';
import FoodAndDrinkTabPanel from './TabPanels/FoodAndDrinkTabPanel';
import AstronomyTabPanel from './TabPanels/AstronomyTabPanel';

// utilities
import { scrollTo } from '../../utilities/scrollTo';

// data
import { workSection } from '../../data/work';
import { musicSection } from '../../data/music';
import { travelSection } from '../../data/travel';
import { foodAndDrinkSection } from '../../data/foodAndDrink';
import { astronomySection } from '../../data/astronomy';


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
    // '& .MuiTab-root': {
    //     backgroundColor: '#fff',
    //     margin: '25px',
    //     color: 'black',
    //     borderRadius: '5px',
    //     height: '90px',
    //   },
    //   '& .Mui-selected': {
    //     backgroundColor: theme.palette.primary.main,
    //     color: '#fff',
    //     boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    //   },
    //   '& .MuiTab-wrapper': {
    //       fontSize: '11px',
    //       fontWeight: 'bold',
    //   },
    //   '& .MuiTab-fullWidth': {
    //       //flexGrow: 0
    //   },
    //   '& .MuiTab-labelIcon': {
    //     minWidth: '95px',
    //   }
  },
  gridContainer: {
    justifyContent: 'center'
  },
  gridItem: {
    margin: '15px'
  }
}));

export default function ProfileSectionTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [dialogData, setDialogData] = useState({imgs: [], label: 'Untitled'});
  const [openFullDialog, setOpenFullDialog] = useState(false);

  const sections = [workSection, musicSection, travelSection, foodAndDrinkSection, astronomySection];

  const handleClickOpenFullDialog = (imgs, label) => {
    setDialogData({ imgs: imgs, label: label })
    setOpenFullDialog(true);
  };

  const handleCloseFullDialog = () => {
    setOpenFullDialog(false);
  };

  const handleChange = (event, newValue) => {
    scrollTo(props.breakpointSm);
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


// pull each section out into its own component
// capture the 'what items to show' in state (see stack overflow)
// custom switch is no longer custom so fix that
// check for other 'generic' comps that are taking specific props


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
      <ImageGalleryDialog 
        open={openFullDialog}
        handleClose={handleCloseFullDialog}
        data={dialogData}
      />
    </Fragment>
  );
}
