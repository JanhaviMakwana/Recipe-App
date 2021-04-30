import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const header = () => {

    return (
        <ul className="Header">
            <li><NavLink to='/'>Recipes</NavLink></li>
        </ul>
    );

};

export default header;