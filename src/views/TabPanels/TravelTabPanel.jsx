import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// custom components
import TabPanel from '../../components/Navigation/TabPanel';
import CustomCard from '../../components/Surface/CustomCard';

// data
import { travelSection } from '../../data/travel';


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
  const { value, idx, openDialog } = props;

  return (
        <TabPanel value={value} index={idx}>
            <Grid container className={classes.gridContainer}>
                {travelSection.data.map((item, idx) => (
                    <Grid key={`${item.title}-${idx}`} item className={classes.gridItem}>
                        <CustomCard 
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            onClick={() => openDialog(item.imgs, item.title)}
                        />
                    </Grid>
                ))}
            </Grid>
        </TabPanel>
  );
}
