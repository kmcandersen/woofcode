// display tasks
import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Alert } from 'react-bootstrap';
import ListItem from './ListItem';
import { TasksContext } from './../contexts/TasksContext';

const Overview = () => {
  const { tasks, setTasks } = useContext(TasksContext);
  //const [tasks, setTasks] = useState({});

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('/todos');
      console.log(data);
      setTasks(data);
    };
    fetchTasks();
  }, [setTasks]);

  // option to toggle bw Show All, isCompleted = false

  return (
    <div>
      <h2 className='my-3'>{tasks.length} Tasks</h2>
      {tasks.length ? (
        <ListGroup>
          {tasks.map((task) => (
            <ListItem task={task} key={task._id} />
          ))}
        </ListGroup>
      ) : (
        <Alert variant='info'>All done! Any tasks to add?</Alert>
      )}
    </div>
  );
};

export default Overview;
