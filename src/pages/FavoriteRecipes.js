import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import imgFavorite from '../images/blackHeartIcon.svg';
import imgShare from '../images/shareIcon.svg';

function FavoriteRecipes() {
  const [favoritFilter, setFavoriteFIlter] = useState('');
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const data = JSON
    .parse(localStorage.getItem('favoriteRecipes'));

  useEffect(() => {
    if (data);
    setFavoriteRecipes(data);
  }, []);

  useEffect(() => {
  }, [favoriteRecipes]);

  const remove = (index) => {
    data.splice(index, [1]);
    localStorage
      .setItem('favoriteRecipes', JSON.stringify(data));
    setFavoriteRecipes(data);
  };

  return (
    <span>
      <Header search={ false } title="Favorite Recipes" />
      <button
        onClick={ () => setFavoriteFIlter('') }
        data-testid="filter-by-all-btn"
        name="all"
        type="button"
      >
        All
      </button>

      <button
        onClick={ () => setFavoriteFIlter('meal') }
        data-testid="filter-by-meal-btn"
        name="meals"
        type="button"
      >
        Filter Meals
      </button>

      <button
        onClick={ () => setFavoriteFIlter('drink') }
        data-testid="filter-by-drink-btn"
        name="drinks"
        type="button"
      >
        Filter Drinks
      </button>

      {favoriteRecipes.length !== 0
      && favoriteRecipes
        .filter((element) => (!favoritFilter ? element : element.type === favoritFilter))
        .map((favorite, index) => (
          <span key={ favorite.id }>

            <Link to={ `/${favorite.type}s/${favorite.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ favorite.image }
                alt={ favorite.name }
              />

              <h2 data-testid={ `${index}-horizontal-name` }>{favorite.name}</h2>
            </Link>

            <button
              type="button"
              data-testid={ `${index}-sharebutton` }
            >
              <img
                alt="share"
                src={ imgShare }
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>

            <button
              type="button"
              onClick={ () => remove(index) }
            >
              <img
                alt="favorite"
                src={ imgFavorite }
                data-testid={ `${index}-horizontal-favorite-btn` }
              />
            </button>

            <p data-testid={ `${index}-horizontal-top-text` }>
              {favorite.type === 'drink'
                ? favorite.alcoholicOrNot
                : `${favorite.nationality} - ${favorite.category}`}
            </p>
          </span>
        ))}
    </span>
  );
}
export default FavoriteRecipes;
