import React from 'react';
import SwipeableViews from 'react-swipeable-views';

// @material-ui/core components
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

// @material-ui/icons
import CodeIcon from '@material-ui/icons/Code';
import MusicIcon from '@material-ui/icons/Audiotrack';
import FlightIcon from '@material-ui/icons/Flight';
import LocalDrink from '@material-ui/icons/LocalDrink';
import PublicIcon from '@material-ui/icons/Public';

// custom components
import TabPanel from './TabPanel';
import CustomCard from '../Surface/CustomCard';

// assets
import umphreys from '../../assets/img/ump.jpg';
import snarky from '../../assets/img/snarky.jpg';
import ttb from '../../assets/img/ttb.jpg';
import route53 from '../../assets/img/aws-route-53.gif';
import swipeableViews from '../../assets/img/react-swipeable.png';
import pose from '../../assets/img/pose.jpg';
import docker from '../../assets/img/docker.jpeg';
import googleDomains from '../../assets/img/google-domains.jpg'
import sturgill from '../../assets/img/sturgill.jpg'
import billy from '../../assets/img/billy.jpg'
import breck from '../../assets/img/breck.jpeg';
import odellIpa from '../../assets/img/odell-ipa.jpeg';
import nasaExoplanet from '../../assets/img/nasa-exoplanet.jpg';
import rmnp from '../../assets/img/rmnp.jpeg';
import spaceX from '../../assets/img/space-x-next-starship.jpeg';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
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
        minWidth: '95px',
      }
  },
  gridContainer: {
    justifyContent: 'center'
  },
  gridItem: {
    margin: '15px'
  }
}));

const workData = [
  {
    title: `AWS Route 53 DNS setup`,
    desc: `If you want to migrate DNS service to Amazon Route 53 for a domain that isn't getting any traffic`,
    img: route53,
    url: 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-inactive.html#migrate-dns-get-zone-file-domain-inactive'
  },
  {
    title: `React Swipeable Views`,
    desc: `A React component for swipeable views.`,
    img: swipeableViews,
    url: 'https://react-swipeable-views.com/getting-started/installation/'
  },
  {
    title: `Animations with Pose`,
    desc: `A truly simple animation library for React, React Native, and Vue`,
    img: pose,
    url: 'https://popmotion.io/pose/'
  },
  {
    title: `Getting started with Docker`,
    desc: `Debug your app, not your environment`,
    img: docker,
    url: 'https://www.docker.com/get-started'
  },
  {
    title: `Google Domain Setup`,
    desc: `Connect your domain to a third-party web host`,
    img: googleDomains,
    url: 'https://support.google.com/domains/answer/6353515?hl=en'
  }
];

const musicData = [
  {
    title: `Umphrey's Mcgee`,
    desc: `This is a description about the card that is a band that shreds the gnar`,
    img: umphreys,
    url: 'https://allthings.umphreys.com/'
  },
  {
    title: `Snarky Puppy`,
    desc: `This is a description about the card that is a band that melts faces`,
    img: snarky,
    url: 'https://snarkypuppy.com/'
  },
  {
    title: `Tedeschi Trucks Band`,
    desc: `This is a description about the card that is a band that is epic af`,
    img: ttb,
    url: 'https://www.tedeschitrucksband.com/'
  },
  {
    title: `Sturgill Simpson`,
    desc: `Another band description here`,
    img: sturgill,
    url: 'https://www.sturgillsimpson.com/'
  },
  {
    title: `Billy Strings`,
    desc: `Billy Strings is an American guitarist and bluegrass musician.`,
    img: billy,
    url: 'https://billystrings.com/'
  }
];

const travelData = [
  {
    title: `Breckenridge, CO 2/6-8/20`,
    desc: `Description here`,
    img: breck,
  },
  {
    title: `Rocky Mountain National Park, CO 10/5/19`,
    desc: `Description here`,
    img: rmnp,
  },
];

const beerData = [
  {
    title: `Odell IPA`,
    desc: `Pale and Vienna malts along with 9 different US hop varieties`,
    img: odellIpa,
    url: 'https://www.beeradvocate.com/beer/profile/267/35626/'
  },
];

const astronomyData = [
  {
    title: `NASA to Photo Surface of Exoplanet`,
    desc: `Our galaxy is potentially full of habitable planets.`,
    img: nasaExoplanet,
    url: 'https://www.wired.com/story/nasa-wants-to-photograph-the-surface-of-an-exoplanet/'
  },
  {
    title: `SpaceX Prototype`,
    desc: `SpaceX’s next Starship prototype is already closing in on its first tests`,
    img: spaceX,
    url: 'https://www.teslarati.com/spacex-next-starship-prototype-sn4-first-tests/'
  },
];

export default function SectionTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    (window.pageYOffset < 425) && window.scrollTo(0, 425);
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
            <Tab className={classes.tab} icon={<MusicIcon />} label="Music" />
            <Tab className={classes.tab} icon={<FlightIcon />} label="Travel" />
            <Tab className={classes.tab} icon={<LocalDrink />} label="Craft Beer" />
            <Tab className={classes.tab} icon={<PublicIcon />} label="Astronomy" />

        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0}>
          <Grid container className={classes.gridContainer}>
            {workData.map((datum, idx) => (
              <Grid key={`${datum.title}-${idx}`} item className={classes.gridItem}>
                <CustomCard 
                  title={datum.title}
                  desc={datum.desc}
                  img={datum.img}
                  url={datum.url}
                  shareUrl={datum.shareUrl}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
         <Grid container className={classes.gridContainer}>
          <Grid container className={classes.gridContainer}>
              {musicData.map((datum, idx) => (
                <Grid key={`${datum.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={datum.title}
                    desc={datum.desc}
                    img={datum.img}
                    url={datum.url}
                    shareUrl={datum.shareUrl}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container className={classes.gridContainer}>
            {travelData.map((datum, idx) => (
                <Grid key={`${datum.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={datum.title}
                    desc={datum.desc}
                    img={datum.img}
                    url={datum.url}
                    shareUrl={datum.shareUrl}
                  />
                </Grid>
              ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
         <Grid container className={classes.gridContainer}>
            {beerData.map((datum, idx) => (
                <Grid key={`${datum.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={datum.title}
                    desc={datum.desc}
                    img={datum.img}
                    url={datum.url}
                    shareUrl={datum.shareUrl}
                  />
                </Grid>
              ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container className={classes.gridContainer}>
            {astronomyData.map((datum, idx) => (
                <Grid key={`${datum.title}-${idx}`} item className={classes.gridItem}>
                  <CustomCard 
                    title={datum.title}
                    desc={datum.desc}
                    img={datum.img}
                    url={datum.url}
                    shareUrl={datum.shareUrl}
                  />
                </Grid>
              ))}
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
