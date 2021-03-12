import React, { useContext } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import { TasksContext } from './../contexts/TasksContext';
import './../index.css';

const ListItem = ({ task }) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const handleRemove = async (taskId) => {
    try {
      await axios.delete(`/todos/${taskId}`);
      setTasks(tasks.filter((el) => el._id !== taskId));
    } catch (err) {
      console.log(`Error: task not deleted. ${err.message}`);
    }
  };

  const handleUpdate = async (taskId, newInfo) => {
    try {
      const { data } = await axios.patch(`/todos/${taskId}`, newInfo);
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

  const checkColor = task.isCompleted ? 'green' : 'gray';
  return (
    <ListGroup.Item action className='d-flex justify-content-between'>
      {task.task}
      <div>
        {!task.isCompleted && (
          <>
            <i
              className='fas fa-trash trashIcon'
              role='button'
              onClick={() => {
                handleRemove(task._id);
              }}
            ></i>
            <i
              className='fas fa-pen penIcon ml-4'
              role='button'
              // onClick={() => {
              //   handleUpdate(task._id);
              // }}
            ></i>
          </>
        )}

        <i
          className='fas fa-check checkIcon ml-4'
          style={{ color: `${checkColor}` }}
          role='button'
          onClick={() => {
            handleUpdate(task._id, { isCompleted: !task.isCompleted });
          }}
        ></i>
      </div>
    </ListGroup.Item>
  );
};

export default ListItem;
