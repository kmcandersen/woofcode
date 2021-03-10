import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import { TasksProvider } from './contexts/TasksContext';
import { TaskProvider } from './contexts/TaskContext';
import { IdCounterProvider } from './contexts/IdCounterContext';

const App = () => {
  return (
    <>
      <Header />
      <TasksProvider>
        <TaskProvider>
          <IdCounterProvider>
            <Main />
          </IdCounterProvider>
        </TaskProvider>
      </TasksProvider>
    </>
  );
};

export default App;
