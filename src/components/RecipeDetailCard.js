import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';

export default function RecipeDetailCard() {
  const { recipe } = useContext(AppContext);
  const { pathname } = useLocation();
  return (
    <div>
      {
        pathname.includes('meals')
          ? Object.values(recipe.map((e) => (
            <div key={ e.idMeal }>
              <h1 data-testid="recipe-title">{e.strMeal}</h1>
              <h1 data-testid="recipe-category">{e.strCategory}</h1>
              <img
                src={ e.strMealThumb }
                alt="Imagem da receita"
                data-testid="recipe-photo"
              />
              <h3>ingredientes</h3>
              <p data-testid="instructions">{e.strInstructions}</p>
              <iframe
                src={ e.strYoutube.replace('watch?v=', 'embed/') }
                title="Youtube video player"
                data-testid="video"
              />
            </div>
          ))) : Object.values(recipe.map((e) => (
            <div key={ e.idDrink }>
              <h1 data-testid="recipe-title">{e.strDrink}</h1>
              <h1 data-testid="recipe-category">{e.strCategory}</h1>
              <img src={ e.strDrinkThumb } alt="Imagem da receita" />
              <h3>ingredientes</h3>
              <p data-testid="instructions">{e.strInstructions}</p>
            </div>
          )))
      }
    </div>
  );
}

// RecipeDetailCard.propTypes = {
//   recipe: PropTypes.objectOf({
//     strMeal: PropTypes.string,
//     strCategory: PropTypes.string,
//     strMealThumb: PropTypes.string,
//     strInstructions: PropTypes.string,
//   }).isRequired,
// };
