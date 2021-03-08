import React from 'react';
import { CircularProgress } from '@material-ui/core';

// in App.js, this CSS didn't center element
const loadingStyles = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
};

const Loading = ({ busy }) => (
  <div style={loadingStyles}>
    <CircularProgress size={100} color='secondary' aria-busy={busy} />
  </div>
);

export default Loading;
