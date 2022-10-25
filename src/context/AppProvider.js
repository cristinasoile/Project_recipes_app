import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('');
  const [recipeList, setRecipeList] = useState([]);

  const contexto = useMemo(() => ({
    title,
    setTitle,
    recipeList,
    setRecipeList,
  }), [title, recipeList]);

  return (
    <AppContext.Provider value={ contexto }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
