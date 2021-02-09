import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.js';
const navigationitems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="\" active="">BURGER BUILDER</NavigationItem>
        <NavigationItem link="\">Checkout</NavigationItem>
    </ul>
);
export default navigationitems;