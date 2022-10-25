import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCard from '../components/RecipeCard';
import AppContext from '../context/AppContext';

export default function Drinks() {
  const { recipeList } = useContext(AppContext);
  const twelve = 12;
  return (
    <div>
      <Header title="Drinks" search="true" />
      {recipeList && recipeList.slice(0, twelve).map((e, i) => (
        <RecipeCard
          id={ i }
          name={ e.strDrink }
          img={ e.strDrinkThumb }
          key={ e.idDrink }
        />
      ))}
      <Footer />
    </div>
  );
}
