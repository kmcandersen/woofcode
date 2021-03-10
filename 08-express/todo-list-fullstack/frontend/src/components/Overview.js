// display tasks
import React, { useContext } from 'react';
import { ListGroup, Alert } from 'react-bootstrap';
import ListItem from './ListItem';
import { TasksContext } from './../contexts/TasksContext';

const Overview = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div>
      <h2 className='my-3'>{tasks.length} Tasks</h2>
      {tasks.length ? (
        <ListGroup>
          {tasks.map((task) => (
            <ListItem task={task} />
          ))}
        </ListGroup>
      ) : (
        <Alert variant='info'>All done! Any tasks to add?</Alert>
      )}
    </div>
  );
};

export default Overview;
