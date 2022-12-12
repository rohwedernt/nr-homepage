import React, { useState } from 'react';
import apiKey from '../../emailkey';
import sendForm from 'emailjs';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';

// Custom Components
import AboutThisSite from '../Content/AboutThisSite';
import EmailDialogContent from '../../components/Dialogs/DialogContent/EmailDialogContent';
import SettingsDialogContent from '../../components/Dialogs/DialogContent/SettingsDialogContent';


const useStyles = makeStyles((theme) => ({
  menuIcon: {
    borderRadius: '8px',
  }
}));

export default function MenuIconButtons(props) {
  const classes = useStyles();
  const { onAdmin, setOpenDialog, handleThemeChange, handleOpenDialog, theme, themeColor, setThemeColor, themeType, setThemeType } = props;

  const [emailContent, setEmailContent] = useState('');

  const setEmailWrapper = val => setEmailContent(val);

  const handleSendEmail = () => {
      sendForm(`gmail`, apiKey.TEMPLATE_ID, emailContent, apiKey.USER_ID)
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
          },
          (error) => {
            alert("An error occurred, Please try again", error.text);
        });
    setOpenDialog(false);
  }

  const aboutThisSiteProps = { 
    content: () => <AboutThisSite />
  };

  const contactProps = {
    title: 'Contact',
    confirmText: 'Send',
    confirmFunc: () => handleSendEmail(),
    content: () => <EmailDialogContent setEmailContent={setEmailContent} />,
    cancel: true
  };

  const settingsProps = {
    title: 'Settings',
    content: () => <SettingsDialogContent 
      handleThemeChange={handleThemeChange}
      theme={theme}
      themeColor={themeColor}
      setThemeColor={setThemeColor}
      themeType={themeType}
      setThemeType={setThemeType}
    />
  };

  return (
    !onAdmin && (
      <div>
        <IconButton
          onClick={() => handleOpenDialog(aboutThisSiteProps)}
          color='secondary'
          className={classes.menuIcon}
        >
          <InfoIcon />
        </IconButton>
        <IconButton
          onClick={() => handleOpenDialog(contactProps)}
          color='secondary'
          className={classes.menuIcon}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          onClick={() => handleOpenDialog(settingsProps)}
          color='secondary'
          className={classes.menuIcon}
        >
          <SettingsIcon />
        </IconButton>
      </div>
    )
  );
}
