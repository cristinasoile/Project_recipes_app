import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import {
  mealsIngredientApi,
  mealsNameApi,
  mealsFirstApi,
  drinksIngredientApi,
  drinksNameApi,
  drinksFirstApi } from '../helpers/API';

export default function SearchBar({ valueSearch, title }) {
  const [search, setSearchFilter] = useState('ingredient');
  const history = useHistory();

  const { setRecipeList } = useContext(AppContext);

  const handleRadio = ({ target }) => {
    setSearchFilter(target.value);
  };

  const caseName = async () => {
    let data;
    if (title === 'Meals') {
      data = await mealsNameApi(valueSearch);
      setRecipeList(data.meals);
      return data;
    }
    data = await drinksNameApi(valueSearch);
    setRecipeList(data.drinks);
    return data;
  };

  const caseIngredient = async () => {
    let data;
    if (title === 'Meals') {
      data = await mealsIngredientApi(valueSearch);
      setRecipeList(data.meals);
      return data;
    }
    if (title === 'Drinks') {
      data = await drinksIngredientApi(valueSearch);
      setRecipeList(data.drinks);
      return data;
    }
  };

  const caseFirstLetter = async () => {
    let data;
    if (valueSearch.length === 1) {
      if (title === 'Meals') {
        data = await mealsFirstApi(valueSearch);
        setRecipeList(data.meals);
        return data;
      }
      data = await drinksFirstApi(valueSearch);
      setRecipeList(data.drinks);
      return data;
    }
    global.alert('Your search must have only 1 (one) character');
  };

  const handleClick = async () => {
    let data;
    switch (search) {
    case 'ingredient':
      data = await caseIngredient();
      break;
    case 'name':
      data = await caseName();
      break;
    case 'firstLetter':
      data = caseFirstLetter();
      if (data.meals == null && data.drinks == null) {
        return;
      }
      break;
    default:
      setRecipeList([]);
    }
    if (data && data.meals && data.meals.length === 1) {
      history.push(`/meals/${data.meals[0].idMeal}`);
    } else if (data && data.drinks && data.drinks.length === 1) {
      history.push(`/drinks/${data.drinks[0].idDrink}`);
    }
    if (data.meals == null && data.drinks == null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  };

  return (
    <div>
      <section className="searchBar">
        <div>
          <label htmlFor="ingredient">
            <input
              type="radio"
              data-testid="ingredient-search-radio"
              id="ingredient"
              name="search"
              value="ingredient"
              onChange={ handleRadio }
            />
            Ingredient
          </label>

          <label htmlFor="name">
            <input
              type="radio"
              data-testid="name-search-radio"
              id="name"
              value="name"
              name="search"
              onChange={ handleRadio }
            />
            Name
          </label>

          <label htmlFor="first letter">
            <input
              type="radio"
              data-testid="first-letter-search-radio"
              id="firstLetter"
              value="firstLetter"
              name="search"
              onChange={ handleRadio }
            />
            First letter
          </label>
        </div>

        <div>
          <button
            className="searchBar-button"
            data-testid="exec-search-btn"
            type="button"
            onClick={ handleClick }
          >
            Search
          </button>
        </div>
      </section>
    </div>
  );
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  valueSearch: PropTypes.string.isRequired,
};
