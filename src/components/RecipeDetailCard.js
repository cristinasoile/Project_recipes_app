import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/recipeDetails.css';

export default function RecipeDetailCard() {
  const { recipe } = useContext(AppContext);
  const { pathname } = useLocation();
  const indexes = [
    '1', '2', '3', '4', '5',
    '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15',
    '16', '17', '18', '19', '20',
  ];
  console.log('apenas recipe', recipe);
  console.log(Object.values(recipe));

  return (
    <div>
      {
        pathname.includes('meals')
          ? Object.values(recipe.map((e) => (
            <div key={ e.idMeal }>
              <img
                className="recipe-img"
                src={ e.strMealThumb }
                alt="Imagem da receita"
                data-testid="recipe-photo"
              />
              <h1 className="card-title" data-testid="recipe-title">{e.strMeal}</h1>
              <h1 className="card-main" data-testid="recipe-category">{e.strCategory}</h1>
              <h2 className="title-ingred">Ingredients</h2>
              { indexes.map((i) => (
                <div
                  className="ingredients"
                  data-testid={ `${i - 1}-ingredient-name-and-measure` }
                  key={ i }
                  style={ { display: 'flex', gap: '4px' } }
                >
                  <div>{recipe.length && recipe[0][`strIngredient${i}`]}</div>
                  <div>{recipe.length && recipe[0][`strMeasure${i}`]}</div>
                </div>
              ))}
              <p className="mode" data-testid="instructions">{e.strInstructions}</p>
              <iframe
                className="video"
                src={ e.strYoutube.replace('watch?v=', 'embed/') }
                title="Youtube video player"
                data-testid="video"
              />
            </div>
          ))) : Object.values(recipe.map((e) => (
            <div
              key={ e.idDrink }
            >
              <img
                className="recipe-img-drink"
                data-testid="recipe-photo"
                src={ e.strDrinkThumb }
                alt="Imagem da receita"
              />
              <h1 className="card-title" data-testid="recipe-title">{e.strDrink}</h1>
              <h1 className="card-main" data-testid="recipe-category">
                {e.strAlcoholic }
              </h1>
              <h2 className="title-ingred">Ingredients</h2>
              { indexes.map((i) => (
                <div
                  key={ i }
                  className="ingredients"
                >
                  <div
                    data-testid={ `${i - 1}-ingredient-name-and-measure` }
                    style={ { display: 'flex', gap: '4px' } }
                  >
                    <div>{recipe.length && recipe[0][`strIngredient${i}`]}</div>
                    <div>{recipe.length && recipe[0][`strMeasure${i}`]}</div>
                  </div>
                </div>
              ))}
              <p className="mode" data-testid="instructions">{e.strInstructions}</p>
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
