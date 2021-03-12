import React, { createContext, useState } from 'react';
import axios from 'axios';
export const TasksContext = createContext();

// const initialTodos = [
//   { id: 1, text: 'Clean Fishtank', completed: false },
//   { id: 2, text: 'Walk Cat', completed: false },
//   { id: 3, text: 'Water Plant', completed: false },
// ];

export const TasksProvider = (props) => {
  const [tasks, setTasks] = useState({});
  const fetchTasks = async () => {
    const { data } = await axios.get('/todos');
    console.log(data);
    setTasks(data);
  };

  return (
    <TasksContext.Provider value={{ tasks, setTasks, fetchTasks }}>
      {props.children}
    </TasksContext.Provider>
  );
};
