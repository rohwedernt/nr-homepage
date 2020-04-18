import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// custom components
import TabPanel from '../../components/Navigation/TabPanel';
import CustomCard from '../../components/Surface/CustomCard';

// data
import { foodAndDrinkSection } from '../../data/foodAndDrink';


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
  const { value, idx } = props;

    return (
        <TabPanel value={value} index={idx}>
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
  );
}
