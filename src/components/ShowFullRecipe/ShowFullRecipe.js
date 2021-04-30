import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PrintIcon from '@material-ui/icons/Print';
import { withRouter } from 'react-router';
import { recipes } from '../recipes';
import './ShowFullRecipe.css';

const ShowFullRecipe = (props) => {
    const { id } = props.match.params;
    const recipe = recipes.find(x => x.id === id);
    const [show, setShow] = useState(true);
    const [ing, setIng] = useState(recipe.ingredients);
    const [servings, setServings] = useState(recipe.servings);
    if (window.open) {
        console.log("open");
    } else {
        console.log("Closed");
    }
    window.onbeforeprint = function () {
        console.log("start");
    }
    window.onafterprint = function () {
        setShow(true)
        console.log("success");
    }

    const onPrintClick = () => {
        setShow(false);
        const timer = setInterval(() => {
            window.print();
            return clearInterval(timer);
        }, 1000);
    }

    const onServeChange = (event) => {
        const timer = setInterval(() => {
            if (event.target.value !== '') {
                setServings(event.target.value);
            } else {
                setServings(4);
            }
            const prevServings = eval(servings);
            let currServings = 4;
            if (event.target.value) {
                currServings = event.target.value;
            }
            const quans = [];
            for (let key in ing) {
                console.log(ing[key].quantity);
                const currQuantity = eval(ing[key].quantity);
                quans.push({
                    name: ing[key].name,
                    quantity: eval((currQuantity) * (currServings / prevServings)),
                    parameter: ing[key].parameter
                })
            }
            setIng(quans);
            return clearInterval(timer);
        }, 1000)

    };

    const img = require(`../../assets/${recipe.img}`).default;
    const steps = recipe.steps.map((step, index) => {
        return <li key={index}>{step.step}</li>
    });

    const ingredients = ing.map((ingredient, index) => {
        return <li key={index}>{ingredient.name + " " + ingredient.quantity + " " + ingredient.parameter}</li>
    });

    const backClickHandler = () => {
        props.history.push('/');
    }

    return (
        <div>
            <div className="Head">
                <p className="Full-Title">{recipe.title}</p>
                {show && <p className="Print-Icon" onClick={onPrintClick}><PrintIcon /></p>}
            </div>

            <div className="FullRecipe">

                <div className="Section1">
                    <div>
                        <span className="Span">Author:</span>
                        <NavLink to={`/author/${recipe.author}`} className="Author">{recipe.author}</NavLink>
                    </div>
                    <div className="Ingredients">
                        <p><span className="Span">Ingredients:</span></p>
                        <ul>{ingredients}</ul>
                    </div>
                    <div className="Steps">
                        <p><span className="Span">Steps:</span></p>
                        <ul>{steps}</ul>
                    </div>
                </div>
                <div className="Section2">
                    {show && <div className="Section3">
                        <label className="Label">Serves:</label>
                        <input className="Serve-Input" onChange={onServeChange} />
                        <button className="Btn-Back" onClick={backClickHandler}>BACK</button>
                    </div>}
                    <img className="Full-Image" src={img} alt="" />
                </div>
            </div>
        </div >
    );
};

export default withRouter(ShowFullRecipe);