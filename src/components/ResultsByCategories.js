import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import RecipeCard from './RecipeCard';

export default function ResultsByCategory() {
  const { title, categoryResults } = useContext(AppContext);

  const renderCase = () => {
    if (title === 'Meals' && categoryResults.length >= 1) {
      return categoryResults.map((e, i) => (
        <Link
          to={ `/meals/${e.idMeal}` }
          key={ e.strMeal }
        >
          <RecipeCard
            id={ i }
            name={ e.strMeal }
            img={ e.strMealThumb }
            key={ e.idMeal }
          />
        </Link>
      ));
    }

    if (title === 'Drinks' && categoryResults.length >= 1) {
      return categoryResults.map((e, i) => (
        <Link
          to={ `/drinks/${e.idDrink}` }
          key={ e.strDrink }
        >
          <RecipeCard
            id={ i }
            name={ e.strDrink }
            img={ e.strDrinkThumb }
            key={ e.idDrink }
          />
        </Link>
      ));
    }
  };

  return (
    <div>
      {renderCase()}
    </div>
  );
}
