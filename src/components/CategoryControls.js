import { React, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { meals12recipesApi, drinks12recipesApi } from '../helpers/API';
import '../styles/categoryControl.css';

function CategoryControls() {
  const {
    category,
    title,
    setRecipeList,
    categoryClicked,
    setCategoryClicked,
  } = useContext(AppContext);

  // lista as primeiras 12 comidas com base na categoria escolhida
  const handleClick = async ({ target }) => {
    if (title === 'Meals') {
      if (target.value === 'All' || categoryClicked === target.value) {
        const data = await meals12recipesApi();
        setRecipeList(data);
        setCategoryClicked(null);
        return;
      }
      setCategoryClicked(target.value);
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${target.value}`);
      const data = await response.json();
      const twelve = 12;
      const getTwelveCategoriesResults = data.meals.slice(0, twelve);
      setRecipeList(getTwelveCategoriesResults);
    }
    // lista os primeiros 12 drinks com base na categoria escolhida
    if (title === 'Drinks') {
      if (target.value === 'All' || categoryClicked === target.value) {
        const data = await drinks12recipesApi();
        setRecipeList(data);
        setCategoryClicked(null);
        return;
      }
      setCategoryClicked(target.value);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${target.value}`);
      const data = await response.json();
      const twelve = 12;
      const getTwelveCategoriesResults = data.drinks.slice(0, twelve);
      setRecipeList(getTwelveCategoriesResults);
    }
  };

  return (
    <div className="category-control">
      {
        category.map(({ strCategory }) => (
          <button
            type="button"
            className="button-category"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            value={ strCategory }
            onClick={ (event) => handleClick(event) }
          >
            {strCategory}
          </button>
        ))
      }
      <button
        type="button"
        className="button-category"
        data-testid="All-category-filter"
        value="All"
        onClick={ (event) => handleClick(event) }
      >
        All
      </button>
    </div>

  );
}

export default withRouter(CategoryControls);
