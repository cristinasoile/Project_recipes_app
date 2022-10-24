import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './components/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Switch>
      <AppProvider>
        <Route exact path="/" component={ Login } />
        <Route exact path="/meals" component={ Recipes } />
      </AppProvider>
    </Switch>
  );
}

export default App;
