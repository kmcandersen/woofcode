import React, { useContext, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Button, FormControl } from 'react-bootstrap';
import Overview from './Overview';
import { TasksContext } from './../contexts/TasksContext';

const Main = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [task, setTask] = useState({ task: '' });

  const handleChange = (e) => {
    setTask({ task: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/todos`, task);
      // add to Context state the new task returned from route
      setTasks([...tasks, data]);
      setTask({ task: '' });
    } catch (err) {
      console.log(`Error: task not added. ${err.message}`);
    }
  };

  return (
    <Container className='d-flex justify-content-center'>
      <Col md={8}>
        <Form
          className='mt-4'
          style={{ paddingTop: '56px' }}
          onSubmit={handleSubmit}
        >
          <Form.Row>
            <Col md={10}>
              <FormControl
                placeholder='New task'
                aria-label='New task'
                aria-describedby='basic-addon2'
                value={task.task}
                type='text'
                onChange={handleChange}
              />
            </Col>
            <Col md={2}>
              <Button variant='warning' type='submit' title='Add Task' block>
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
