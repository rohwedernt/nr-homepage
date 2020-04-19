import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listLinkItems } from '../../graphql/queries'

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
  const [items, setItems] = useState([]);
  const { value, idx } = props;

  useEffect(() => {
    fetchItems()
  }, []);

  async function fetchItems() {
    try {
      const itemData = await API.graphql(graphqlOperation(listLinkItems));
      const items = myStuff ? 
        itemData.data.listLinkItems({filter: "myContent === true"}).items :
        itemData.data.listLinkItems.items;
      setItems(items);
    } catch (err) { console.log('error fetching items') };
  }

  return (
      <TabPanel value={value} index={idx}>
          <AppBar style={{ backgroundColor: '#fff' }} elevation={0} position='static'>
              <Toolbar style={{ display: 'flex', justifyContent: 'center', minHeight: '38px' }} >
                  <CustomSwitch on={myStuff} setOn={setMyStuff} />
              </Toolbar>
          </AppBar>
          <Grid container className={classes.gridContainer}>
              {items.length > 0 ? items.map((item, idx) => (
                  <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                      <CustomCard 
                          title={item.name}
                          desc={item.description}
                          img={item.image.url}
                          onClick={() => window.open(item.url, '_blank')}
                      />
                  </Grid>
              )) : <NoContentCard />
              }
          </Grid>
      </TabPanel>
  );
}
