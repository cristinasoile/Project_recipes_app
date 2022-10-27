import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import RecipeDetailCard from '../components/RecipeDetailCard';
import Carousel from '../components/Carousel';
import { mealDetailsApi, drinkDetailsApi } from '../helpers/API';

export default function RecipeDetails({ location: { pathname } }) {
  const [recipe, setRecipe] = useState([]);
  const [recipeType, setRecipeType] = useState('');

  const { id } = useParams();

  const fecthMealsDetails = async (idRecipe) => {
    const recipeDetail = await mealDetailsApi(idRecipe);
    setRecipe(recipeDetail.meals);
    setRecipeType('meals');
  };

  const fecthDrinksDetails = async (idRecipe) => {
    const drinkDetail = await drinkDetailsApi(idRecipe);
    setRecipe(drinkDetail.drinks);
    setRecipeType('drinks');
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
  }, []);

  return (
    <div>
      <RecipeDetailCard recipe={ recipe } recipeType={ recipeType } />
      <Carousel />
    </div>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
