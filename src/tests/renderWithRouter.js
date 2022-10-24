import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

function renderWithRouter(component, historyEntries = ['/']) {
  const history = createMemoryHistory({ initialEntries: historyEntries });
  return {
    ...render(
      <Router history={ history }>
        { component }
      </Router>,
    ),
    history,
  };
}

export default renderWithRouter;
