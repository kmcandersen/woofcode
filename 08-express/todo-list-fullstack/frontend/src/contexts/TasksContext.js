import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

const initialTodos = [
  { id: 1, text: 'Clean Fishtank', completed: false },
  { id: 2, text: 'Walk Cat', completed: false },
  { id: 3, text: 'Water Plant', completed: false },
];

export const TasksProvider = (props) => {
  const [tasks, setTasks] = useState(initialTodos);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TasksContext.Provider>
  );
};
