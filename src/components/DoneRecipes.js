import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import AppContext from '../context/AppContext';
import '../styles/doneRecipes.css';

// const copy = require('clipboard-copy');

function DoneRecipes() {
  const { copyLink, setCopyLink } = useContext(AppContext);
  const [filterDrinks, setFilterDrinks] = useState(false);
  const [filterMeals, setFilterMeals] = useState(false);
  // const history = useHistory();
  // import { Link, useHistory } from 'react-router-dom';

  const verificação = () => {
    if (filterMeals) {
      return 'meal';
    }
    if (filterDrinks) {
      return 'drink';
    }
  };

  const recipeFilter = (type) => {
    const allRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (type === 'meal') {
      const recipesFilters = allRecipes.filter(
        (recipe) => recipe.type === type,
      );
      return recipesFilters;
    }
    if (type === 'drink') {
      const recipesFilters = allRecipes.filter(
        (recipe) => recipe.type === type,
      );
      return recipesFilters;
    }
    return allRecipes;
  };
  return (
    <div className="done-recipe">
      <div className="filter-buttons">

        <button
          className="button-done"
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => {
            setFilterDrinks(false);
            setFilterMeals(false);
          } }
        >
          All
        </button>

        <button
          className="button-done"
          type="button"
          data-testid="filter-by-meal-btn"
          onClick={ () => {
            setFilterMeals(!filterMeals);
            setFilterDrinks(false);
          } }
        >
          Meals
        </button>

        <button
          className="button-done"
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => {
            setFilterDrinks(!filterDrinks);
            setFilterMeals(false);
          } }
        >
          Drinks
        </button>

        {recipeFilter(verificação())?.map((recipe, index) => (
          <div key={ recipe.id }>
            <Link
              to={
                recipe.type === 'meal'
                  ? `/meals/${recipe.id}`
                  : `/drinks/${recipe.id}`
              }
            >
              <img
                src={ recipe.image }
                data-testid={ `${index}-horizontal-image` }
                alt="recipe"
                width="250px"
              />
            </Link>
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.type === 'meal'
                ? `${recipe.nationality} - ${recipe.category}`
                : `${recipe.alcoholicOrNot}`}
            </p>
            <Link
              to={
                recipe.type === 'meal'
                  ? `/meals/${recipe.id}`
                  : `/drinks/${recipe.id}`
              }
            >
              <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
            </Link>
            <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              onClick={ () => {
                navigator.clipboard.writeText(`http://localhost:3000/${recipe}/${index}`);
                setCopyLink(true);
              } }
            >
              {copyLink && <div>Link copied!</div>}
              Teste
              <img src={ shareIcon } alt="share icon" />
            </button>
            <ul>
              {recipe?.tags.map((tagName) => (
                <li
                  data-testid={ `${index}-${tagName}-horizontal-tag` }
                  key={ tagName }
                >
                  {tagName}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoneRecipes;
