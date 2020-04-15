import React from 'react';

// @material-ui/icons
import CodeIcon from '@material-ui/icons/Code';

// data
import { CardTypes } from './cardTypes';

// assets
import route53 from '../assets/img/aws-route-53.png';
import swipeableViews from '../assets/img/react-swipeable.png';
import pose from '../assets/img/pose.jpg';
import docker from '../assets/img/docker.jpeg';
import googleDomains from '../assets/img/google-domains.png';
import placeholder from '../assets/img/placeholder.png';


export const workSection = {
	label: 'work',
	icon: <CodeIcon />,
	data: [
		{
		  type: CardTypes.url,
		  title: `AWS Route 53 DNS setup`,
		  desc: `If you want to migrate DNS service to Amazon Route 53 for a domain that isn't getting any traffic`,
		  img: route53,
		  url: 'https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/migrate-dns-domain-inactive.html#migrate-dns-get-zone-file-domain-inactive'
		},
		{
		  type: CardTypes.url,
		  title: `React Swipeable Views`,
		  desc: `A React component for swipeable views.`,
		  img: swipeableViews,
		  url: 'https://react-swipeable-views.com/getting-started/installation/'
		},
		{
		  type: CardTypes.url,
		  title: `Animations with Pose`,
		  desc: `A truly simple animation library for React, React Native, and Vue`,
		  img: pose,
		  url: 'https://popmotion.io/pose/'
		},
		{
		  type: CardTypes.url,
		  title: `Getting started with Docker`,
		  desc: `Debug your app, not your environment`,
		  img: docker,
		  url: 'https://www.docker.com/get-started'
		},
		{
		  type: CardTypes.url,
		  title: `Google Domain setup`,
		  desc: `Connect your domain to a third-party web host`,
		  img: googleDomains,
		  url: 'https://support.google.com/domains/answer/6353515?hl=en'
		},
		{
		  title: `Test Title`,
		  desc: `Description here`,
		  img: placeholder
		},
		{
		  title: `Test Title`,
		  desc: `Description here`,
		  img: placeholder
		},
		{
		  title: `Test Title`,
		  desc: `Description here`,
		  img: placeholder
		},
		{
		  title: `Test Title`,
		  desc: `Description here`,
		  img: placeholder
		},
		{
		  title: `Test Title`,
		  desc: `Description here`,
		  img: placeholder
		},
		{
		  title: `Test Title`,
		  desc: `Description here`,
		  img: placeholder
		},
		{
		  title: `Test Title`,
		  desc: `Description here`,
		  img: placeholder
		}
	]
}
  