// display tasks
import React, { useContext } from 'react';
import { ListGroup, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';
import { TasksContext } from './../contexts/TasksContext';

const Overview = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  const handleRemove = (taskId) => {
    setTasks(tasks.filter((el) => el.id !== taskId));
  };
  return (
    <div>
      <h2 className='my-3'>{tasks.length} Tasks</h2>
      {tasks.length ? (
        <ListGroup>
          {tasks.map((task) => (
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
          ))}
        </ListGroup>
      ) : (
        <Alert variant='info'>All done! Any tasks to add?</Alert>
      )}
    </div>
  );
};

export default Overview;
