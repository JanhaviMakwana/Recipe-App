import React from 'react';
import { withRouter } from 'react-router';
import './RecipeCarousel.css';

const recipeCarousel = (props) => {

    const onRecipeClick = (id) => {
        props.history.push(`/recipes/${id}`);
        console.log(id);
    }

    const currRecipe = props.recipe;
    const img = require(`../../../assets/${currRecipe.img}`).default;
    return (
        <div className="RecipeCarousel" onClick={() => onRecipeClick(currRecipe.id)}>
            <p className="TitleCarousel">{currRecipe.title}</p>
            <div className="ImageCarousel"><img src={img} alt="" /></div>
        </div>
    );
};

export default withRouter(recipeCarousel);