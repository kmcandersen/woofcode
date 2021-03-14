// display tasks
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Alert } from 'react-bootstrap';
import ListItem from './ListItem';
import { TasksContext } from './../contexts/TasksContext';

const Overview = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('/todos');
      setTasks(data);
    };
    fetchTasks();
  }, [setTasks]);

  const calcActiveTasks = (tasks) => tasks.filter((el) => !el.isCompleted);

  const sortTasks = () =>
    tasks.sort((a, b) => (a.isCompleted > b.isCompleted ? 1 : -1));

  // won't run until tasks fetched from db
  const activeTasks = tasks.length && calcActiveTasks(tasks);

  return (
    <div className='my-5'>
      {tasks.length ? (
        <>
          <h2 className='my-3'>{activeTasks.length} To-Do</h2>
          <div className='d-flex justify-content-between align-items-center'>
            <h6 className='my-3'>
              {tasks.length - activeTasks.length} completed{' '}
              {tasks.length === 1 ? 'task' : 'tasks'}
            </h6>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheck'
                defaultChecked
                onClick={() => {
                  setShowAll(!showAll);
                  sortTasks();
                }}
              />
              <label className='form-check-label' htmlFor='flexCheck'>
                Show completed tasks
              </label>
            </div>
          </div>
          {tasks.length && !activeTasks.length && (
            <Alert variant='info'>
              Your to-do list is to-done! Anything to add?
            </Alert>
          )}

          <ListGroup>
            {showAll
              ? tasks.map((task) => <ListItem task={task} key={task._id} />)
              : activeTasks.map((activeTask) => (
                  <ListItem task={activeTask} key={activeTask._id} />
                ))}
          </ListGroup>
        </>
      ) : (
        <Alert variant='info'>Add your first task!</Alert>
      )}
    </div>
  );
};

export default Overview;
