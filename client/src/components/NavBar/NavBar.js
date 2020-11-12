import React from 'react';
import classes from './NavBar.module.css';

const navBar = (props) => (
    <header className={classes.MainHeader}>
        <div>
            <b className={classes.MainHeaderBrand}>
                Currency Converter
            </b>
        </div>
    </header>
)

export default navBar