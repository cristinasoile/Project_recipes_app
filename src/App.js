import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from './context/AppProvider';
import Login from './components/Login';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>

     <AppProvider>
      <Route exact path="/" component={ Login } />
      <Route path="/meals" component={ Recipes } />
      <Route exact path="/" component={ Login } />
      <Route path="/drinks" component={ Recipes } />
      <Route exact path="/meals/:id" component={ RecipeDetails } />
      <Route exact path="/drinks/:id" component={ RecipeDetails } />
      <Route exact path="/meals/:id/in-progress" component={ RecipeInProgress } />
      <Route exact path="/drinks/:id/in-progress" component={ RecipeInProgress } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
     <Route path="*" component={ NotFound } />
      </AppProvider>
    </Switch>
  );
}

export default App;
