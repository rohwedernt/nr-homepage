import React, { useState, useEffect } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

// custom components
import TabPanel from '../../components/Navigation/TabPanel';
import CustomCard from '../../components/Surface/CustomCard';
import CustomSwitch from '../../components/Input/CustomSwitch';
import NoContentCard from '../../components/Surface/NoContentCard';

// data
import { workSection } from '../../data/work';


const useStyles = makeStyles(() => ({
  gridContainer: {
    justifyContent: 'center'
  },
  gridItem: {
    margin: '15px'
  },
  card: {
    minWidth: 320,
    maxWidth: 320,
  },
  cardMedia: {
    height: 200,
  },
}));

export default function ProfileSectionTabs(props) {
  const classes = useStyles();
  const [myStuff, setMyStuff] = useState(false);
  const { value, idx } = props;

  const getItems = () => myStuff ? workSection.data.filter(i => i.myStuff !== undefined) : workSection.data;

  return (
      <TabPanel value={value} index={idx}>
          <AppBar style={{ backgroundColor: '#fff' }} elevation={0} position='static'>
              <Toolbar style={{ display: 'flex', justifyContent: 'center', minHeight: '38px' }} >
                  <CustomSwitch on={myStuff} setOn={setMyStuff} />
              </Toolbar>
          </AppBar>
          <Grid container className={classes.gridContainer}>
              {getItems().length > 0 ? getItems().map((item, idx) => (
                  <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                      <CustomCard 
                          title={item.title}
                          desc={item.desc}
                          img={item.img}
                          url={item.url}
                          onClick={() => window.open(item.url, '_blank')}
                      />
                  </Grid>
              )) : <NoContentCard />
              }
          </Grid>
      </TabPanel>
  );
}
