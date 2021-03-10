// display tasks
import React from 'react';
import { ListGroup, OverlayTrigger, Tooltip, Alert } from 'react-bootstrap';

const Overview = ({ tasks, handleRemove }) => {
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
