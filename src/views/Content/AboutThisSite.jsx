import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// data
import sysDesign from '../../assets/img/sysDesign.png';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '250px',
        '& .MuiTypography-gutterBottom': {
            marginBottom: theme.spacing(2)
        }
    }
}));

export function AboutThisSite() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography gutterBottom variant={'h5'}>Welcome</Typography>
            <Typography gutterBottom variant={'body1'}>This space attempts to be the hub of my development world. In that effort, I'll try to continue to get as much content up as possible over the course of 2020. Ideally, that will include a healthy mix of stuff I've created (development side projects, music I've written and/or recorded, places I've gone, meals I've cooked, etc.) and links to resources from all areas of my interests that I've held on to for one reason or another.</Typography>
            <Typography gutterBottom variant={'body1'}>While I hope to eventually get most or all of the development side projects I've been involved in onto the site, the site is itself the primary workspace for things I am learning/experimenting with and is the most comprehensive showcase of SPA development available at the moment.</Typography>
            <Typography gutterBottom variant={'body1'}>I doubt I'll ever get to a place where I consider this project finished. There is a long and ever growing list of todos on the trello board and even if I'm able to widdle that down to near completion I will continue to use this app as the testing ground for new frameworks, libraries, languages, technologies, etc.</Typography>
            <div style={{ height: '20px' }} />
            <Typography gutterBottom variant={'h5'}>Architecture</Typography>
            <Typography gutterBottom variant={'subtitle2'}>Overview</Typography>
            <Typography gutterBottom variant={'body1'}>NateRohwederDotCom is a fullstack serverless single page web application built with <a target='_blank' href='https://reactjs.org/docs/hello-world.html'>React</a> and harnessing a series of cloud resources for its backend and database needs including a REST API and <a target='_blank' href='https://graphql.org/learn/'>GraphQL</a>.</Typography>
            <Typography gutterBottom variant={'body1'}>The two primary technologies I wanted to use for this project were React and AWS. At the outset I still didn't have a great sense of just how much of this project could be managed in the cloud. The backend, database, CI/CD pipeline and DNS are all in AWS and I plan on digging even deeper into cloud feature possibilities (analytics, logging, email, authentication and i18n are all on the roadmap).</Typography>
            <Typography gutterBottom variant={'body1'}>The 'managing' service is <a target='_blank' href='https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html'>AWS Amplify</a> which provides a git-based workflow for hosting web applications with continuous deployment. The static content is being stored in an <a target='_blank' href='https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html'>S3 bucket</a> and served up to the client via <a target='_blank' href='https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html'>CloudFront</a>. The app itself communicates with the <a target='_blank' href='https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html'>API Gateway</a> networking service which allows me to connect any back-end systems to the web app. Since this is a serverless architecture, all my backend logic is being run from a compute service called <a target='_blank' href='https://docs.aws.amazon.com/lambda/latest/dg/welcome.html'>lambda</a>. Just as the name implies, lambda allows me to run code without ever provisioning a server and communicates with <a target='_blank' href='https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html'>DynamoDB</a> to get, save, delete or whatever depending on what request was sent from the client.</Typography>
            <img style={{ width: '80%', display: 'block', margin: '15px auto' }} src={sysDesign} />
            <Typography gutterBottom variant={'body1'}>Amplify hooks directly into the project's github repository and monitors the master and qa branches for code commits. Instant cache invalidations ensure the app is updated on every code commit instantly. With each code change Amplify automatically provisions the necessary resources, builds the application according to my project's build config, runs tests, deploys and even runs a 'verify' step where screenshots of the app are generated with headless Chrome to ensure it renders well on different mobile resolutions. A comprehensive CI/CD pipeline that automatically scales, is trivial to set up, and is fully customizeable.</Typography>
            <Typography gutterBottom variant={'body1'}>I had been using <a target='_blank' href='https://domains.google'>Google Domains</a> as the naterohweder.com registrar and DNS service but wanted everything to be in the AWS ecosystem for ease of use and some additional features that come along. Network administration is not remotely an area of expertise for me but the <a target='_blank' href='https://docs.aws.amazon.com/route53/'>Route 53</a> console makes things reasonably intuitive.</Typography>
            <Typography gutterBottom variant={'subtitle2'}>Frontend</Typography>
            <Typography gutterBottom variant={'body1'}>Coming Soon</Typography>
            <Typography gutterBottom variant={'subtitle2'}>Backend</Typography>
            <Typography gutterBottom variant={'body1'}>Coming Soon</Typography>
            <div style={{ height: '20px' }} />
            <Typography gutterBottom variant={'h5'}>Challenges</Typography>
            <Typography gutterBottom variant={'body1'}>Coming Soon</Typography>
        </div>
    );
}