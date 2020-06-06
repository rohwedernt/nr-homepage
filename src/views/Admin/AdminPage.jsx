import React, { Fragment, useState } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// @material-ui/icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// custom components
import MenuAppBar from '../MenuAppBar';
import ListImagesForm from './Forms/ListImagesForm';
import ListItemsForm from './Forms/ListItemsForm';
import CreateItemForm from './Forms/CreateItemForm';
import CreateImageForm from './Forms/CreateImageForm';
import AddImageToGalleryForm from './Forms/AddImageToGalleryForm';
import UpdateItemForm from './Forms/UpdateItemForm';
import DeleteItemForm from './Forms/DeleteItemForm';
import SuccessAlert from '../../components/Alerts/SuccessAlert';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
    	display: 'flex',
    	'& > *': {
      		margin: theme.spacing(8),
      		width: '100%'
    	}
  	},
  	pageHeader: {
		textAlign: 'center',
		margin: theme.spacing(5)
  	},
  	form: {
		margin: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column'
  	},
  	formControl: {
		margin: theme.spacing(1),
		width: '30%',
		minWidth: 250,
	},
	input: {
		margin: theme.spacing(1),
		width: '60%',
		minWidth: 250,
	  },
	controlLabel: {
		marginLeft: 0,
		marginTop: theme.spacing(1)
	},
	button: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(1),
		width: '150px'
	}
}));

function AdminPage(props) {
	const classes = useStyles();
	const [openAlert, setOpenAlert] = useState(false);

    return (
        <Fragment>
            <MenuAppBar 
              //breakpointMd={breakpointMd} 
              //breakpointSm={breakpointSm} 
			  setPrimaryColor={props.setPrimaryColor}
			  onAdmin
            />
			<div className={classes.root}>
				<Paper elevation={16} style={{ paddingBottom: '20px' }}>
					<Typography variant='h4' className={classes.pageHeader}>Admin</Typography>
					<Container>
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant='subheader1'>List Images</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<ListImagesForm classes={classes} onSuccess={() => setOpenAlert(true)} />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						{/* <Divider /> */}
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant='subheader1'>List Items</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<ListItemsForm classes={classes} onSuccess={() => setOpenAlert(true)} />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						{/* <Divider /> */}
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant='subheader1'>Create Image</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<CreateImageForm classes={classes} onSuccess={() => setOpenAlert(true)} />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						{/* <Divider /> */}
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant='subheader1'>Add Image to Gallery</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<AddImageToGalleryForm classes={classes} onSuccess={() => setOpenAlert(true)} />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						{/* <Divider /> */}
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant='subheader1'>Create Item</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<CreateItemForm classes={classes} onSuccess={() => setOpenAlert(true)} />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						{/* <Divider /> */}
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant='subheader1'>Update Item</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<UpdateItemForm classes={classes} onSuccess={() => setOpenAlert(true)} />
							</ExpansionPanelDetails>
						</ExpansionPanel>
						{/* <Divider /> */}
						<ExpansionPanel>
							<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
								<Typography variant='subheader1'>Delete Item</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<DeleteItemForm classes={classes} onSuccess={() => setOpenAlert(true)} />
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</Container>
					
				</Paper>
			</div>
			<AmplifySignOut />
			<SuccessAlert
				msg='Success!'
				open={openAlert}
				setOpenAlert={setOpenAlert}
      		/>
        </Fragment>
    );
}

export default withAuthenticator(AdminPage);
