import React, { useState } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';

// custom components
import TabPanel from '../../components/Navigation/TabPanel';
import MediaCard from '../../components/Surface/MediaCard';
import NoContentCard from '../../components/Surface/NoContentCard';
import CustomSwitch from '../../components/Input/CustomSwitch';

// data
import { musicSection } from '../../data/music';


const useStyles = makeStyles(() => ({
  gridContainer: {
    justifyContent: 'center'
  },
  gridItem: {
    margin: '15px'
  }
}));

export default function ProfileSectionTabs(props) {
    const classes = useStyles();
    const [myStuff, setMyStuff] = useState(false);
    const { value, idx } = props;

    const myItems = musicSection.data.filter(i => i.myStuff !== undefined);
    const items = myStuff ? myItems : musicSection.data;

    return (
        <TabPanel value={value} index={idx}>
            <AppBar style={{ backgroundColor: '#fff' }} elevation={0} position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'center', minHeight: '38px' }} >
                    <CustomSwitch on={myStuff} setOn={setMyStuff} />
                </Toolbar>
            </AppBar>
            <Grid container className={classes.gridContainer}>
                {items.length > 0 ? items.map((item, idx) => (
                    <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                    <MediaCard 
                        title={item.title}
                        desc={item.desc}
                        url={item.url}
                    />
                    </Grid>
                )) : <NoContentCard />}
            </Grid>
        </TabPanel>
    );
}
