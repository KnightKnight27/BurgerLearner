import React from  'react';
import Logo from '../../Logo/Logo.js';
import Aux from '../../../hoc/Aux.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import classes from './SIdeDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop.js';
const sideDrawer = (props)=>{
    let AttatchedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){

        AttatchedClasses = [classes.SideDrawer,classes.Open];
    };
    return (
        <Aux>
        <BackDrop show={props.open} clicked={props.closed} />
        <div className={AttatchedClasses.join(' ')} >
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );

};
export default sideDrawer;