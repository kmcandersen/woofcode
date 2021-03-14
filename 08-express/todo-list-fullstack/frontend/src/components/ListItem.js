import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Form, Col, FormControl, ListGroup } from 'react-bootstrap';
import { TasksContext } from './../contexts/TasksContext';
import './../index.css';

const ListItem = ({ task }) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [updatedTask, setUpdatedTask] = useState({ task: '' });
  const [isEditing, setIsEditing] = useState(false);

  // UPDATE task input field
  const handleChange = (e) => {
    setUpdatedTask({ task: e.target.value });
  };

  // toggle isCompleted, change task
  // preventDefault not needed to toggle isCompleted; change task incl addl funcs inline (below)
  const handleUpdate = async (e, taskId, updatedInfo) => {
    e.preventDefault();
    try {
      const { data } = await axios.patch(`/todos/${taskId}`, updatedInfo);
      // map thru state; if id matches updated task, return it. Else return unchanged task. Replace existing task list with updated list.
      const updatedTodos = tasks.map((el) => {
        if (el._id === taskId) {
          return data;
        } else {
          return el;
        }
      });
      setTasks(updatedTodos);
    } catch (err) {
      console.log(`Error: task not changed. ${err.message}`);
    }
  };

  const handleRemove = async (taskId) => {
    try {
      await axios.delete(`/todos/${taskId}`);
      setTasks(tasks.filter((el) => el._id !== taskId));
    } catch (err) {
      console.log(`Error: task not deleted. ${err.message}`);
    }
  };

  const checkColor = task.isCompleted ? 'green' : 'gray';
  if (!isEditing) {
    return (
      <ListGroup.Item className='d-flex justify-content-between'>
        {task.task}
        <div>
          {!task.isCompleted && (
            <>
              <i
                className='fas fa-trash trashIcon'
                role='button'
                title='Delete Task'
                onClick={() => {
                  handleRemove(task._id);
                }}
              ></i>
              <i
                className='fas fa-pen penIcon ml-4'
                role='button'
                title='Edit Task'
                onClick={() => {
                  setIsEditing(true);
                }}
              ></i>
            </>
          )}
          <i
            className='fas fa-check checkIcon ml-4'
            style={{ color: `${checkColor}` }}
            role='button'
            title='Mark Completed'
            onClick={(e) =>
              handleUpdate(e, task._id, { isCompleted: !task.isCompleted })
            }
          ></i>
        </div>
      </ListGroup.Item>
    );
  } else {
    return (
      <ListGroup.Item action className='d-flex justify-content-between'>
        <Form
          //   className='mt-4 mb-5'
          style={{ width: '100%' }}
          onSubmit={(e) => {
            handleUpdate(e, task._id, updatedTask);
            setUpdatedTask({ task: '' });
            setIsEditing(false);
          }}
        >
          <Form.Row>
            <Col md={10}>
              <FormControl
                placeholder={task.task}
                aria-label='Edit task'
                aria-describedby='basic-addon2'
                value={updatedTask.task}
                type='text'
                onChange={handleChange}
              />
            </Col>
            {/* <Col md={2}>
              <Button variant='warning' type='submit' block>
                Add
              </Button>
            </Col> */}
          </Form.Row>
        </Form>

        <div>
          <i
            className='fas fa-window-close closeIcon'
            role='button'
            onClick={() => {
              setIsEditing(false);
            }}
          ></i>
        </div>
      </ListGroup.Item>
    );
  }
};

export default ListItem;
