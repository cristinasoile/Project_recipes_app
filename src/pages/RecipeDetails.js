import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import RecipeDetailCard from '../components/RecipeDetailCard';
import Carousel from '../components/Carousel';
import { mealDetailsApi, drinkDetailsApi } from '../helpers/API';
import AppContext from '../context/AppContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/recipeDetails.css';
// import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function RecipeDetails({ location: { pathname } }) {
  const [isCopied, setIsCopied] = useState(false);
  const { recipe, setRecipe } = useContext(AppContext);
  const { id } = useParams();
  const history = useHistory();

  const fecthMealsDetails = async (idRecipe) => {
    const recipeDetail = await mealDetailsApi(idRecipe);
    setRecipe(recipeDetail.meals);
  };

  const fecthDrinksDetails = async (idRecipe) => {
    const drinkDetail = await drinkDetailsApi(idRecipe);
    setRecipe(drinkDetail.drinks);
  };

  const handleClick = () => {
    const route = pathname;
    if (route.includes('meals')) {
      history.push(`/meals/${recipe[0].idMeal}/in-progress`);
    } else {
      history.push(`/drinks/${recipe[0].idDrink}/in-progress`);
    }
  };

  const handleCopy = () => {
    const url = window.location.href;
    copy(url);
    setIsCopied(true);
  };

  const handleFavorite = () => {
    const getFavoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const setFavoriteRecipes = [
      ...getFavoriteRecipes,
      {
        id: recipe[0].idDrink || recipe[0].idMeal,
        type: pathname.includes('drink') ? 'drink' : 'meal',
        nationality: recipe[0].strArea || '',
        category: recipe[0].strCategory,
        alcoholicOrNot: recipe[0].strAlcoholic || '',
        name: recipe[0].strDrink || recipe[0].strMeal,
        image: recipe[0].strDrinkThumb || recipe[0].strMealThumb,
      },
    ];
    localStorage.setItem('favoriteRecipes', JSON.stringify(setFavoriteRecipes));
  };

  useEffect(() => {
    const handleRecipeandRecipeType = async () => {
      const route = pathname;
      const receita = route.includes('meals')
        ? await fecthMealsDetails(id)
        : await fecthDrinksDetails(id);
      return receita;
    };
    handleRecipeandRecipeType();
  }, [id, pathname]);

  const styles = {
    position: 'fixed',
    bottom: '0px',
  };

  return (

    <div>
      <div className="icons">
        <input
          className="icon-share"
          type="image"
          src={ shareIcon }
          alt="Compartilhar receita"
          data-testid="share-btn"
          onClick={ () => handleCopy() }
        />
        {isCopied && <span>Link copied!</span>}
        <input
          className="icon-favorite"
          type="image"
          src={ whiteHeartIcon }
          alt="Favoritar receita"
          data-testid="favorite-btn"
          onClick={ () => handleFavorite() }
        />
      </div>
      <RecipeDetailCard />
      <Carousel />
      <button
        className="button-start"
        type="button"
        data-testid="start-recipe-btn"
        style={ styles }
        onClick={ handleClick }
      >
        Start Recipe
      </button>
    </div>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
