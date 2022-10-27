import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import RecipeDetailCard from '../components/RecipeDetailCard';
import Carousel from '../components/Carousel';
import { mealDetailsApi, drinkDetailsApi,
  mealRecommendationApi, drinkRecommendationApi } from '../helpers/API';

export default function RecipeDetails({ location: { pathname } }) {
  const [recipe, setRecipe] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [recipeType, setRecipeType] = useState('');

  const { id } = useParams();

  const fecthMealsDetails = async () => {
    const recipeDetail = await mealDetailsApi(id);
    const recommendation = await mealRecommendationApi();
    setRecipe(recipeDetail.meals);
    setRecommendations(recommendation.meals);
  };

  const fecthDrinksDetails = async () => {
    const drinkDetail = await drinkDetailsApi(id);
    const recommendation = await drinkRecommendationApi();
    setRecipe(drinkDetail.drinks);
    setRecommendations(recommendation.drinks);
  };

  useEffect(() => {
    const handleRecipeandRecipeType = async () => {
      const route = pathname;
      const receita = route.includes('meals')
        ? await fecthMealsDetails() : await fecthDrinksDetails();
      const tipo = route.includes('meals')
        ? setRecipeType('meals') : setRecipeType('drinks');
      return receita && tipo;
    };
    handleRecipeandRecipeType();
  });

  return (
    <div>
      <RecipeDetailCard recipe={ recipe } recipeType={ recipeType } />
      {
        recommendations
        && recommendations.length
        && <Carousel recommedations={ recommendations } />
      }
    </div>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
