import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    textAlign: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h4' className={classes.title}>
            🤪 MAD LIBS 🤣
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
