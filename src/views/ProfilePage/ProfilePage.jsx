import React, { Fragment, useEffect, useState } from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// custom components
import SectionTabs from '../../components/Navigation/SectionTabs';
import MenuAppBar from '../../components/Navigation/MenuAppBar';
import { SocialIconAnimator } from '../../components/Animators/SocialIconAnimator';

// assets
import profile from '../../assets/img/profile-full.jpg';
import { Github, LinkedIn, Twitter, Facebook, Instagram } from '../../assets/icons/icons';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(8),
      width: '100%'
    }
  },
  headerSection: {
    display: 'flex',
  },
  pageHeader: {
    borderBottom: '2px solid grey',
    width: 'fit-content',
    paddingBottom: '5px',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(1)
  },
  pageSubheader: {
    textTransform: 'uppercase',
    fontSize: '0.85em',
    fontWeight: 600,
    marginLeft: theme.spacing(3.4),
    marginBottom: theme.spacing(1),
    color: '#6c757d'
  },
  pageParagraph: {
    fontFamily: `'Montserrat', sans-serif`,
    color: '#999',
    marginLeft: theme.spacing(3.4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
  profileImg: {
      maxWidth: '350px',
      maxHeight: '275px',
      borderRadius: '6px',
      marginLeft: '16px',
      marginTop: '-60px',
      position: 'relative'
  },
  coloredShadow: {
    '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
        display: 'none !important'
    },
    maxWidth: '350px',
    transform: 'scale(0.94)',
    filter: 'blur(12px)',
    maxHeight: '275px',
    position: 'absolute',
    top: '110px',
    left: '110px'
  },
  animator: {
      // needs to wrap at 1135
    //borderTop: '2px solid grey',
    display: 'flex',
    //alignItems: 'center',
    //flexDirection: 'row',
    //justifyContent: 'flex-end',
    //height: 'fit-content',
    //flex: '1 1 auto',
  }
}));

export default function ProfilePage() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [adujustForAlert, setAdjustForAlert] = useState(false);

    const bkptLg = useMediaQuery('(max-width:1135px)');
    const bkptMd = useMediaQuery('(max-width:990px)');


    useEffect(() => {
        setTimeout(toggle, 0);
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    const toggleHeightForAlert = () => setAdjustForAlert(!adujustForAlert);

    return (
        <Fragment>
            <MenuAppBar toggleHeightForAlert={toggleHeightForAlert} />
                <div className={classes.root}>
                    <Paper style={{ padding: '30px', borderRadius: '6px' }} elevation={16}>
                        <div className={classes.headerSection} style={bkptMd ? { flexWrap: 'wrap' } : undefined}>
                            <img className={classes.coloredShadow} style={adujustForAlert ? { top: '158px' } : undefined} src={profile} />
                            <img className={classes.profileImg} src={profile} />
                            <div>
                                <Typography 
                                    className={classes.pageHeader} 
                                    variant="h4"
                                >
                                    Nate Rohweder
                                </Typography>
                                <SocialIconAnimator className={classes.animator} pose={isOpen ? 'open' : 'closed'}>
                                    <Github target='https://github.com/rohwedernt' />
                                    <LinkedIn target='https://www.linkedin.com/in/nate-rohweder-8b1026121/' />
                                    <Twitter target='https://twitter.com/nrohweder1' />
                                    <Facebook target='https://www.facebook.com/rohwedernt' />
                                    <Instagram target='https://www.instagram.com/naterohweder/' />
                                </SocialIconAnimator>
                                <Typography className={classes.pageSubheader} variant="h6">Software Engineer</Typography>
                                <Typography className={classes.pageParagraph} variant="body1" component="div">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                    laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </div>
                        </div>
                        <SectionTabs style={bkptMd ? { minWidth: '50px' } : undefined}/>
                    </Paper>
                </div>
        </Fragment>
    );
}
