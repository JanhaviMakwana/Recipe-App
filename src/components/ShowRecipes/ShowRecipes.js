import React from 'react';
import Recipe from './Recipe/Recipe';
import { recipes } from '../recipes';
import './ShowRecipes.css';

const ShowRecipes = () => {

    const recipeBank = recipes.map(recipe => {
        return <Recipe key={recipe.id} recipe={recipe} />;
    });

    return (
        <div className="Recipes">
            {recipeBank}
        </div>
    );
};

export default ShowRecipes;