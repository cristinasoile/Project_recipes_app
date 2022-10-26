import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Login from './components/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import RecipeDetails from './pages/RecipeDetails';
import drinkInProgress from './pages/drinkInProgress';
import mealsInProgress from './pages/mealsInProgress';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AppProvider>
          <Route exact path="/" component={ Login } />
          <Route exact path="/meals" component={ Meals } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/meals/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id" component={ RecipeDetails } />
          <Route exact path="/drinks/:id/in-progress" component={ drinkInProgress } />
          <Route exact path="/meals/:id/in-progress" component={ mealsInProgress } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/done-recipes" component={ DoneRecipes } />
          <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        </AppProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
