import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { TextContext } from '../contexts/TextContext';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: '20px',
  },
  textField: {
    margin: '10px 0px',
    textTransform: 'capitalize',
  },
}));

const Form = ({ data }) => {
  const { blanks, value } = data;

  const classes = useStyles();

  // these need to go to global state:
  const [inputs, setInputs] = useState({});
  // access method from global state:
  const { setText } = useContext(TextContext);

  const history = useHistory();

  const handleChange = (event, i) => {
    setInputs({ ...inputs, [i]: event.target.value });
  };

  const renderBlanks = () =>
    blanks.map((el, i) => (
      <TextField
        id='outlined-basic'
        label={el}
        variant='outlined'
        key={i}
        className={classes.textField}
        value={inputs[i] || ''}
        // 1) whole handler contained here:
        // onChange={(event) => setInputs({ ...inputs, [i]: event.target.value })}
        // 2) how to use 'i' with separate handler func (onChange={handleChange}) doesn't work
        onChange={(event) => handleChange(event, i)}
      />
    ));

  const generateText = (inputs) =>
    value.reduce(
      (acc, curr, index) => `${acc} ${curr || ''} ${inputs[index] || ''}`,
      ''
    );

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = generateText(inputs);
    setText(text);
    history.push('/results');
  };

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      {blanks && renderBlanks()}

      <Button
        type='submit'
        variant='contained'
        color='primary'
        size='large'
        className={classes.button}
      >
        CREATE MAD LIB
      </Button>
    </form>
  );
};

export default Form;
