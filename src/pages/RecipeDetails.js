import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import RecipeDetailCard from '../components/RecipeDetailCard';
import Carousel from '../components/Carousel';
import { mealDetailsApi, drinkDetailsApi } from '../helpers/API';
import AppContext from '../context/AppContext';

export default function RecipeDetails({ location: { pathname } }) {
  const { setRecipe } = useContext(AppContext);
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
      <RecipeDetailCard />
      <Carousel />
      <button
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
