import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TasksProvider } from './contexts/TasksContext';
import { TaskProvider } from './contexts/TaskContext';
import { IdCounterProvider } from './contexts/IdCounterContext';

ReactDOM.render(
  <React.StrictMode>
    <TasksProvider>
      <TaskProvider>
        <IdCounterProvider>
          <App />
        </IdCounterProvider>
      </TaskProvider>
    </TasksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
