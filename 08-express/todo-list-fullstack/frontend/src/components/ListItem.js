import React, { useContext } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import { TasksContext } from './../contexts/TasksContext';
import './../index.css';

const ListItem = ({ task }) => {
  //   const { tasks, setTasks } = useContext(TasksContext);
  // const handleRemove = (taskId) => {
  //   setTasks(tasks.filter((el) => el._id !== taskId));
  // };
  const handleRemove = async (taskId) => {
    const removed = await axios.delete(`/todos/${taskId}`);
    console.log('removed', removed);
  };

  //   const handleDone = (taskId) => {
  //     LIKE UPDATE
  //   };

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
          // onClick={() => {
          //   handleDone(task._id);
          // }}
        ></i>
      </div>
    </ListGroup.Item>
  );
};

export default ListItem;
