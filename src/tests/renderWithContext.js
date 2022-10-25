import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AppProvider from '../context/AppProvider';

const RenderWithContext = (children) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router history={ history }>
        <AppProvider>
          { children }
        </AppProvider>
      </Router>,
    ),
    history,
  });
};

export default RenderWithContext;
