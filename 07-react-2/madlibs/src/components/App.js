import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.js';
import Form from './Form.js';
import Results from './Results.js';
import Loading from './Loading.js';
import { Container, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    flex: 1,
    padding: '20px',
    margin: '10px 0px',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  subtitle: {
    margin: '10px 0 30px',
  },
}));

const App = () => {
  const [data, setData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchResponse = async () => {
      const { data } = await axios(
        'http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=10'
      );
      setData(data);
      setIsLoaded(true);
    };
    fetchResponse();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Container className={classes.container} maxWidth='sm'>
        {!isLoaded ? (
          <Loading busy={!isLoaded} />
        ) : (
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.subtitle} variant='h5'>
              {data.title}
            </Typography>
            <Switch>
              <Route exact path='/'>
                <Form data={data} />
              </Route>
              <Route path='/results'>
                <Results />
              </Route>
            </Switch>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default App;
