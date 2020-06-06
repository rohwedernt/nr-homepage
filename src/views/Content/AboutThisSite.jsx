import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// data
import highLevelArchitecture from "../../assets/img/highlevel-architecture.png";
import appsyncArch from "../../assets/img/appsync-architecture.png";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "250px",
    textIndent: "1em",
    "& .MuiTypography-gutterBottom": {
      marginBottom: theme.spacing(2),
    },
  },
}));

export function AboutThisSite() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography gutterBottom variant={"h5"}>
        Welcome
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        This space attempts to be the hub of my development world. In that
        effort, I'll try to continue to get as much content up as possible over
        the course of 2020. Ideally, that will include a healthy mix of stuff
        I've created (development side projects, music I've recorded, places
        I've gone, meals I've cooked, etc.) and links to resources from all
        areas of my interests that I've held on to for one reason or another.
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        While I hope to eventually make most or all of the development side
        projects I've been involved available here, the site is itself the
        primary workspace for things I am learning/experimenting with and is the
        most comprehensive showcase of my work available at the moment. I doubt
        I'll ever get to a place where I consider this project finished. There
        is a long and ever growing list of todos on the trello board and even if
        I'm able to whittle that down to near completion I will continue to use
        this app as the testing ground for new frameworks, libraries, languages,
        technologies, etc.
      </Typography>
      <div style={{ height: "20px" }} />
      <Typography gutterBottom variant={"h5"}>
        Architecture
      </Typography>
      <Typography gutterBottom variant={"subtitle2"}>
        Overview
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        NateRohwederDotCom is a fullstack serverless single page web application
        built with React and harnessing a series of cloud resources for its
        backend and database needs. The two primary technologies at play here
        are React and AWS. At the outset I still didn't have a great sense of
        just how much of this project could be managed in the cloud. The
        backend, database, CI/CD pipeline and DNS are all in AWS and I plan on
        digging even deeper into cloud feature possibilities (analytics,
        logging, email, authentication and i18n are all on the roadmap).
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        The hosting service is AWS Amplify which provides a git-based workflow
        for hosting web applications with continuous deployment. Amplify is the
        hub for managing my frontend and backend environments and covers
        everything from provisioning to build configuration to domain management
        for the site. The static content is being stored in an S3 bucket and
        served up to the client via CloudFront.
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        Amplify hooks directly into the project's github repository and monitors
        the master and qa branches for code commits. Instant cache invalidations
        ensure the app is updated on every code commit instantly. With each code
        change Amplify automatically provisions the necessary resources, builds
        the application according to my project's build config, runs tests,
        deploys and even runs a 'verify' step where screenshots of the app are
        generated with headless Chrome to ensure it renders well on different
        mobile resolutions. At risk of this starting to sound like an AWS
        commercial, I must say - it is truly a comprehensive CI/CD pipeline that
        automatically scales, is trivial to set up, and is fully customizeable -
        I love it.
      </Typography>
      <img
        style={{
          width: "80%",
          maxWidth: "650px",
          display: "block",
          margin: "15px auto",
        }}
        alt="architecture-diagram"
        src={highLevelArchitecture}
      />
      <Typography gutterBottom variant={"body1"}>
        The backend hub is AWS AppSync, a fully managed GraphQL service. AppSync
        provides API actions for creating and interacting with data sources
        using GraphQL from the application. Appsync offers resolvers for 3
        primary data sources - DynamoDB, Lambda or Elasticsearch. In this case,
        AppSync is provisioning DynamoDB resources on my behalf, as needed,
        allowing the app to read and write to the DynamoDB database through
        GraphQL statements (or more specifically the Amplify GraphQL client API)
        and subscribe to real-time data. AppSync offers performance monitoring
        and metrics for my API, granular caching configuration, a query
        validation tool, schema management and lots more out of the box. This
        generic architecture diagram outlines some of these interactions:
      </Typography>
      <img
        style={{
          width: "80%",
          maxWidth: "650px",
          display: "block",
          margin: "15px auto",
        }}
        alt="appsync-architecture"
        src={appsyncArch}
      />
      <Typography gutterBottom variant={"body1"}>
        I had been using Google Domains as the naterohweder.com registrar and
        DNS service but wanted everything to be in the AWS ecosystem for ease of
        use and some additional features that come along. Network administration
        is not remotely an area of expertise for me but the Route 53 console
        makes things reasonably intuitive.
      </Typography>
      <Typography gutterBottom variant={"subtitle2"}>
        Frontend
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        The impetus of the first version of this site was to practice with new
        react features (hooks in particular) and libraries (react router, react
        player, pose to name a few) that were out of scope for my projects at
        NoveList. We, at the time, had just gotten our feet wet with material
        design and material UI and so I knew from the start that I wanted to
        lean on those principles and components. Things have not changed much as
        far as the approach for this version of the site. I am by no means a UX
        or web design expert - I refer to the principles of material design for
        conventions and as a general guideline but have deviated from certain
        aspects of the Material system.
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        The client code can generally be split into 3 categories - components,
        layouts, and views. Structuring the project in this way, which seems to
        be all but convention at this point, is reminiscent (if over simplified)
        of Brad Frost's atomic design methodology (link in 'Work' section).
        Components are meant as generic pieces optimized for reuse, conceptually
        building blocks. Layouts are groups of components grouped together in
        common ways. Layouts are also concerned with reuse like, for example,
        the tab panels on this site. A view is a top level assemblage of layouts
        and possibly other one off components that are needed.
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        Everything I've described above would be considered a 'presentational
        component', borrowing the term first coined by Dan Abramov when dividing
        components into those that are smart (containers) and dumb (presenters).
        Seperating requests to a data store from your presentational logic is
        essential for reusing pieces of the UI and is a logical seperation givin
        the compositional nature of react. The best example in my project so far
        is the implementation of the tab sections. All of the content sections
        of a tab are basically the same - a grid of cards with thumbnails and
        descriptions, etc. The data request needed to populate the data is
        different for each though, hitting different parts of the API and
        different tables in the database. Each container can reach out to the
        api and get its data and populate the common ItemContent component
        reused by each.
      </Typography>
      <Typography gutterBottom variant={"subtitle2"}>
        Design
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        The approach I took for this version of the site was meant to be
        something of an 'uber-SPA' (there's probably a real name for this).
        Instead of navigating to different pages of content (as was the case
        with v1) everything on the site is available on a single page. The
        different types of content - work, music, travel and so on are rendered
        within a tab panel in a discrete content area on the main page. The side
        projects, some of them fully deployed full stack applications in and of
        themselves, are viewed in a full screen dialog. This is a notable
        departer from Material guidelines which recommends dialogs are used
        sparingly because their "purposefully interruptive" nature. Not a
        principle I disagree with, by the way. Most of us supress some level of
        rage or nausea when confronted with a startling and unwelcome popup
        window. That said, the use of the dialog in this instance feels very
        much like a navigation without the loss of navigation context. In this
        way the user has a better sense of where they are, avoiding the all to
        familiar feeling that you are so deep in the labyrinth of a web app that
        you may never find your way out. The user is the only place they can be
        on the site - home.
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        The site should have a full optimized feel for any screen size. Some
        sites, though responsive, conjure the thought "this was not meant for
        this screen", but no web app these days has any business invoking such
        concerns. The main view should always feel spacious - elements on the
        page should have room to breath. At the same time, if the layout is too
        sparse it conveys a lack of content. The site should have a certain
        'meatiness' to it, expressing that there is a lot you want to share with
        the user to maintain their engagement.
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        A note on iconography - I am generally suspicious of icon buttons
        without helper text. Too frequently the user has to click to see what
        the thing does. That said, there is a subset of icons that are so common
        that their meaning is universal. Clicking a ✗ will close the element
        it's attached to, always. The print icon, settings cog, hamburger menu
        and envelope icon are all similarly intuitive. I have limited the icon
        buttons on the site to those that I had high confidence any user would
        understand at a glance.
      </Typography>
      <Typography gutterBottom variant={"body1"}>
        Another design tenet that is yet to be fully implemented is allowing the
        user to customize elements of the page. My current POC for this idea is
        the ability to set the theme color for the site from the settings menu.
        Eventually, I hope to expand the users ability to tailor the page to
        their liking.
      </Typography>
      <div style={{ height: "20px" }} />
      <Typography variant={"body1"}>
        <b>More Coming Soon!</b>
      </Typography>
    </div>
  );
}
