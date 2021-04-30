import React, { useState } from 'react';
import { withRouter } from 'react-router';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { recipes, findList } from '../recipes';
import RecipeCarousel from './RecipeCarousel/RecipeCarousel';
import './Authors.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Authors = (props) => {
    const authorsList = findList();
    const { name } = props.match.params
    const recipesBank = recipes.filter(x => x.author === name);

    return (
        <div>
            <p><h1 className="Author-Name">{name}</h1></p>
            <Carousel className="Carousel" responsive={responsive} infinite={true}>
                {recipesBank.map((recipe, index) => {
                    return <RecipeCarousel key={index} recipe={recipe} />
                })
                }
            </Carousel>
        </div>
    );
};

export default withRouter(Authors);