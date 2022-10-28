import React from 'react';
import Header from '../components/Header';
import DoneRecipes from '../components/DoneRecipes';

function DoneRecipesPage() {
  return (
    <div>
      <Header title="Done Recipes" search="false" />
      <DoneRecipes />
    </div>
  );
}

export default DoneRecipesPage;
