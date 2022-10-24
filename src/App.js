import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from './context/AppProvider';
import Login from './components/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Switch>
      <AppProvider>
        <Route exact path="/" component={ Login } />
        <Route path="/meals" component={ Recipes } />
      </AppProvider>
    </Switch>
  );
}

export default App;
