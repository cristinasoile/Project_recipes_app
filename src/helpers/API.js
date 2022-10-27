export async function mealsIngredientApi(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function mealsNameApi(name) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function mealsFirstApi(firstLetter) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function drinksIngredientApi(ingredient) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function drinksNameApi(name) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function drinksFirstApi(firstLetter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function mealDetailsApi(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function drinkDetailsApi(id) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function mealRecommendationApi() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  const response = await fetch(url);
  const data = await response.json();
  const MAX_RECOMMENDATION_LENGTH = 6;

  const recommendation = data.meals
    .filter((e, index) => index < MAX_RECOMMENDATION_LENGTH).map((e) => ({
      id: e.idMeal,
      title: e.strMeal,
      img: e.strMealThumb,
    }));

  return recommendation;
}

export async function drinkRecommendationApi() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  const MAX_RECOMMENDATION_LENGTH = 6;

  const recommendation = data.drinks
    .filter((e, index) => index < MAX_RECOMMENDATION_LENGTH).map((e) => ({
      id: e.idDrink,
      title: e.strDrink,
      img: e.strDrinkThumb,
    }));

  return recommendation;
}

export async function meals12recipesApi() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  const MAX_RECONMENDATION_LENGTH = 12;

  const reconmendation = data.meals
    .filter((e, index) => index < MAX_RECONMENDATION_LENGTH);

  return reconmendation;
}

export async function drinks12recipesApi() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(url);
  const data = await response.json();
  const MAX_RECONMENDATION_LENGTH = 12;

  const reconmendation = data.drinks
    .filter((e, index) => index < MAX_RECONMENDATION_LENGTH);

  return reconmendation;
}
