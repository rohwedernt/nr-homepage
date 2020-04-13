import React from 'react';
import SwipeableViews from 'react-swipeable-views';

// @material-ui/core components
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// @material-ui/icons
import CodeIcon from '@material-ui/icons/Code';
import RadioIcon from '@material-ui/icons/Radio';
import RssIcon from '@material-ui/icons/RssFeed';

// custom components
import TabPanel from './TabPanel';
import CustomCard from '../Surface/CustomCard'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '60px auto',
    '& .MuiTab-root': {
        backgroundColor: '#fff',
        margin: '25px',
        color: 'black',
        borderRadius: '5px',
        height: '90px',
      },
      '& .Mui-selected': {
        backgroundColor: '#3f51b5',
        color: '#fff',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
      },
      '& .MuiTabs-flexContainer': {
          justifyContent: 'center'
      },
      '& .MuiTab-wrapper': {
          fontSize: '11px',
          fontWeight: 'bold',
      },
      '& .MuiTab-fullWidth': {
          flexGrow: 0
      },
      '& .MuiTab-labelIcon': {
        minWidth: '90px',
      }
  }
}));

export default function SectionTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={'transparent'} elevation={0}>
        <Tabs className={classes.tab}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
            <Tab className={classes.tab} icon={<CodeIcon />} label="Work" />
            <Tab className={classes.tab} icon={<RadioIcon />} label="Music" />
            <Tab className={classes.tab} icon={<RssIcon />} label="Blog" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <CustomCard />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
