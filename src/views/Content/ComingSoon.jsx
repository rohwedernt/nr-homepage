import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '250px'
    }
}));

export function ComingSoon() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography gutterBottom variant={'subtitle2'}>- Add my projects to work section (filters to these when 'Created By Me' switch is engaged)</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Add my music to music section (filters to these when 'Created By Me' switch is engaged)</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Finish content on 'About This Site' section</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Add additional content to work section</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Render additional images for each travel item in image gallery dialog</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Add additional content to music section</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Add additional content to food and drink section</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Add additional content to astronomy section</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Render NateRohwederDotCom v1 in full screen dialog (menu item)</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Render Scrum Retro Tool in full screen dialog (menu item)</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Implement email send when submitted from contact dialog</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Render dashboard POC in full screen dialog (menu item)</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Implement dark mode</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Add text styling functionality to contact text area</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Implement pagination for sections with >n cards</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Setup analytics via aws kinesis (feed to dashboard POC)</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Implement auth for user specific settings</Typography>
            <Typography gutterBottom variant={'subtitle2'}>- Internationalization support</Typography>
        </div>
    );
}
