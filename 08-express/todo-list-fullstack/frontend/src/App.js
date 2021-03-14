import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/Main';
import { TasksProvider } from './contexts/TasksContext';

const App = () => {
  return (
    <>
      <Header />
      <TasksProvider>
        <Main />
      </TasksProvider>
    </>
  );
};

export default App;
