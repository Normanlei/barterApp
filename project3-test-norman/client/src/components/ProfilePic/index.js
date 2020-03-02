import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
const Profileimage = {
    // if user.profilepic exists, then image = this.profile image
    // else, Profileimage = "../img/defaultPic"
}
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function ImageAvatars() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Profile Pic" src={Profileimage} className={classes.large} />
    </div>
  );
}