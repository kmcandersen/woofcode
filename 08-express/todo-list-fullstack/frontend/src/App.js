// logic - inputs & manage state
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Button, FormControl } from 'react-bootstrap';
import Header from './components/Header';
import Overview from './components/Overview';

const App = () => {
  const initialTodos = [
    { id: 1, text: 'Clean Fishtank', completed: false },
    { id: 2, text: 'Walk Cat', completed: false },
    { id: 3, text: 'Water Plant', completed: false },
  ];
  const [tasks, setTasks] = useState(initialTodos);
  const [task, setTask] = useState({ id: 0, text: '' });
  const [idCounter, setidCounter] = useState(0);

  const handleChange = (event) => {
    setTask({ id: idCounter, text: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // form req when state change dep on existing state
    setTasks([...tasks, task]);
    setTask({ id: 0, text: '' });
    setidCounter(idCounter + 1);
  };
  const handleRemove = (taskId) => {
    setTasks(tasks.filter((el) => el.id !== taskId));
  };

  return (
    <>
      <Header />
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

          <Overview tasks={tasks} handleRemove={handleRemove} />
        </Col>
      </Container>
    </>
  );
};

export default App;
