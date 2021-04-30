import React from 'react';
import { withRouter } from 'react-router';
import './Recipe.css';


const recipe = (props) => {

    const onRecipeClick = (id) => {
        props.history.push(`/recipes/${id}`);
        console.log(id);
    }

    const currRecipe = props.recipe;
    const img = require(`../../../assets/${currRecipe.img}`).default;
    return (
        <div className="Recipe" onClick={() => onRecipeClick(currRecipe.id)}>
            <p className="Title">{currRecipe.title}</p>
            <div className="Detail">
                <p>{currRecipe.author}</p>
                <p className="Time">{currRecipe.time}</p>
            </div>
            <div className="Image"><img src={img} alt="" /></div>
        </div>
    );
};

export default withRouter(recipe);


