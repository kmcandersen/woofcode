// logic - inputs & manage state
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form, Button, FormControl } from 'react-bootstrap';
import Header from './components/Header';
import Overview from './components/Overview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: { id: 0, text: '' },
      tasks: [],
      idCounter: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      task: { id: this.state.idCounter, text: event.target.value },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // form req when state change dep on existing state: https://reactjs.org/docs/state-and-lifecycle.html
    // this.setState((prevState) => ({
    //   tasks: [...this.state.tasks, this.state.task],
    //   task: { id: 0, text: '' },
    //   idCounter: prevState.idCounter + 1,
    // }));
    this.setState(() => ({
      tasks: [...this.state.tasks, this.state.task],
      task: { id: 0, text: '' },
      idCounter: this.state.idCounter + 1,
    }));
  };
  handleRemove = (taskId) => {
    this.setState({ tasks: this.state.tasks.filter((el) => el.id !== taskId) });
  };

  render() {
    const { task, tasks } = this.state;
    return (
      <>
        <Header />
        <Container className='d-flex justify-content-center'>
          <Col md={8}>
            <Form
              className='mt-4 mb-5'
              style={{ paddingTop: '56px' }}
              onSubmit={this.handleSubmit}
            >
              <Form.Row>
                <Col md={10}>
                  <FormControl
                    placeholder='New task'
                    aria-label='New task'
                    aria-describedby='basic-addon2'
                    value={task.text}
                    type='text'
                    onChange={this.handleChange}
                  />
                </Col>
                <Col md={2}>
                  <Button variant='warning' type='submit' block>
                    Add
                  </Button>
                </Col>
              </Form.Row>
            </Form>

            <Overview tasks={tasks} handleRemove={this.handleRemove} />
          </Col>
        </Container>
      </>
    );
  }
}

export default App;
