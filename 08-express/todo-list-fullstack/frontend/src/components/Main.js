import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Button, FormControl } from 'react-bootstrap';
import Overview from './Overview';
import { TasksContext } from './../contexts/TasksContext';
import { TaskContext } from './../contexts/TaskContext';
import { IdCounterContext } from './../contexts/IdCounterContext';

const Main = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const { task, setTask } = useContext(TaskContext);
  const { idCounter, setIdCounter } = useContext(IdCounterContext);

  const handleChange = (event) => {
    setTask({ id: idCounter, text: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask({ id: 0, text: '' });
    setIdCounter(idCounter + 1);
  };

  return (
    <Container className='d-flex justify-content-center'>
      <Col md={8}>
        <Form
          className='mt-4 mb-5'
          style={{ paddingTop: '56px' }}
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Col md={10}>
              <FormControl
                placeholder='New task'
                aria-label='New task'
                aria-describedby='basic-addon2'
                value={task.text}
                type='text'
                onChange={handleChange}
              />
            </Col>
            <Col md={2}>
              <Button variant='warning' type='submit' block>
                Add
              </Button>
            </Col>
          </Form.Row>
        </Form>

        <Overview />
      </Col>
    </Container>
  );
};

export default Main;
