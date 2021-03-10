import React, { useContext } from 'react';
import { ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { TasksContext } from './../contexts/TasksContext';

const ListItem = ({ task }) => {
  const { tasks, setTasks } = useContext(TasksContext);
  const handleRemove = (taskId) => {
    setTasks(tasks.filter((el) => el.id !== taskId));
  };
  return (
    <ListGroup.Item
      action
      key={task.id}
      className='d-flex justify-content-between'
    >
      {task.text}
      <OverlayTrigger
        placement='right'
        overlay={<Tooltip>Remove Task</Tooltip>}
      >
        <i
          className='fas fa-times'
          style={{ color: 'red' }}
          role='button'
          onClick={() => {
            handleRemove(task.id);
          }}
        ></i>
      </OverlayTrigger>
    </ListGroup.Item>
  );
};

export default ListItem;
