import React, { Fragment, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

// custom components
import TabPanel from './TabPanel';
import MediaCard from '../Surface/MediaCard';
import CustomCard from '../Surface/CustomCard';
import ImageGalleryDialog from '../Dialogs/ImageGalleryDialog';
import CustomSwitch from '../Input/CustomSwitch';

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

export default function SectionTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [dialogData, setDialogData] = useState({imgs: [], label: 'Untitled'});
  const [openFullDialog, setOpenFullDialog] = useState(false);
  const [workMyStuff, setWorkMyStuff] = useState(false);

  const sections = [workSection, musicSection, travelSection, foodAndDrinkSection, astronomySection]

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
          <TabPanel value={value} index={0}>
            <AppBar style={{ backgroundColor: '#fff' }} elevation={0} position="static">
              <Toolbar style={{ display: 'flex', justifyContent: 'center', minHeight: '38px' }} >
                <CustomSwitch workMyStuff={workMyStuff} setWorkMyStuff={setWorkMyStuff} />
              </Toolbar>
            </AppBar>
            <Grid container className={classes.gridContainer}>
              {workSection.data.map((item, idx) => (
                <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                    url={item.url}
                    shareUrl={item.shareUrl}
                    onClick={() => window.open(item.url, '_blank')}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container className={classes.gridContainer}>
              {musicSection.data.map((item, idx) => (
                <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                  <MediaCard 
                    title={item.title}
                    desc={item.desc}
                    url={item.url}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container className={classes.gridContainer}>
              {travelSection.data.map((item, idx) => (
                <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                    onClick={() => handleClickOpenFullDialog(item.imgs, item.title)}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container className={classes.gridContainer}>
              {foodAndDrinkSection.data.map((item, idx) => (
                <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                    // onClick={} this should open the image larger with a bit more text for a review
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid container className={classes.gridContainer}>
              {astronomySection.data.map((item, idx) => (
                <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={item.title}
                    desc={item.desc}
                    img={item.img}
                    url={item.url}
                    shareUrl={item.shareUrl}
                    onClick={() => window.open(item.url, '_blank')}
                  />
                </Grid>
              ))}
            </Grid>
          </TabPanel>
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
