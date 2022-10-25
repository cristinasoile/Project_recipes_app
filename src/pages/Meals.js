import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppContext from '../context/AppContext';
import RecipeCard from '../components/RecipeCard';

function Meals() {
  const { recipeList } = useContext(AppContext);
  const twelve = 12;
  return (
    <div>
      <Header search="true" title="Meals" />
      {recipeList && recipeList.slice(0, twelve).map((e, i) => (
        <RecipeCard
          id={ i }
          name={ e.strMeal }
          img={ e.strMealThumb }
          key={ e.idMeal }
        />
      ))}
      <Footer />
    </div>
  );
}
export default Meals;
