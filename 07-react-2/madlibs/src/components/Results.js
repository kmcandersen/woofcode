import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TextContext } from '../contexts/TextContext';

const useStyles = makeStyles((theme) => ({
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: '20px',
  },
  link: {
    textDecoration: 'none',
  },
}));

const Results = () => {
  const classes = useStyles();
  // access result text string from global state:
  const { text } = useContext(TextContext);
  if (text) {
    return (
      <>
        <Typography variant='h6'>Your results:</Typography>
        <p>{text}</p>
        <Link to={`/`} className={classes.link}>
          <Button
            type='button'
            variant='outlined'
            color='primary'
            size='large'
            className={classes.button}
            fullWidth
          >
            PLAY AGAIN
          </Button>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Typography variant='h6'>You need to complete the form!</Typography>
        <Link to={`/`} className={classes.link}>
          <Button
            type='button'
            variant='outlined'
            color='primary'
            size='large'
            className={classes.button}
            fullWidth
          >
            PLAY
          </Button>
        </Link>
      </>
    );
  }
};

export default Results;
