import React, { Fragment, useState } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

// custom components
import MenuAppBar from '../MenuAppBar';
import ListItemsForm from './Forms/ListItemsForm';
import CreateItemForm from './Forms/CreateItemForm';
import UpdateItemForm from './Forms/UpdateItemForm';
import DeleteItemForm from './Forms/DeleteItemForm';
import SuccessAlert from '../../components/Alerts/SuccessAlert';


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
				<Paper elevation={16}>
					<Typography variant='h4' className={classes.pageHeader}>Admin</Typography>
					<ListItemsForm classes={classes} onSuccess={() => setOpenAlert(true)} />
					<Divider />
					<CreateItemForm classes={classes} onSuccess={() => setOpenAlert(true)} />
					<Divider />
					<UpdateItemForm classes={classes} onSuccess={() => setOpenAlert(true)} />
					<Divider />
					<DeleteItemForm classes={classes} onSuccess={() => setOpenAlert(true)} />
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
