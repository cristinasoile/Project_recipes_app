import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router';
// import { Link } from 'react-router-dom';
import CategoryControls from './CategoryControls';
import Footer from './Footer';
import Header from './Header';
import RecipeCard from './RecipeCard';
import ResultsByCategory from './ResultsByCategories';
import AppContext from '../context/AppContext';
import { meals12recipesApi, drinks12recipesApi } from '../helpers/API';
import '../styles/recipeCard.css';

function Recipes() {
  const {
    title,
    setTitle,
    recipeList,
    setRecipeList,
    categoryClicked,
  } = useContext(AppContext);

  // const [recipe12, setRecipe12] = useState([]);
  const twelve = 12;

  const recipe12meals = async () => {
    setRecipeList(await meals12recipesApi());
  };

  const recipe12drinks = async () => {
    setRecipeList(await drinks12recipesApi());
  };

  useEffect(() => {
    const actualPath = window.location.pathname;
    if (actualPath === '/meals') {
      recipe12meals();
      setTitle('Meals');
    }
    if (actualPath === '/drinks') {
      recipe12drinks();
      setTitle('Drinks');
    }
  }, [title]);

  return (
    <div>
      <Header search="true" title={ title } />
      <CategoryControls />
      <div className="recipes-main">
        {recipeList && recipeList.slice(0, twelve).map((e, i) => (
          <RecipeCard
            type={ e.strMeal ? 'meals' : 'drinks' }
            i={ i }
            name={ e.strMeal || e.strDrink }
            img={ e.strMealThumb || e.strDrinkThumb }
            key={ e.idMeal || e.idDrink }
            id={ e.idMeal || e.idDrink }
          />
        ))}

      </div>
      {
        (!recipeList || !recipeList.length) && categoryClicked
          && <ResultsByCategory />
      }
      <Footer />
    </div>
  );
}
export default withRouter(Recipes);
