import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux.js';
import Backdrop from '../Backdrop/Backdrop.js';
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked ={props.modalClose}/>
    <div
     style={ {
        transform : props.show ? 'translateY(0)':'translateY(-100vh)',
    opacity :props.show? '1':'0' } } 
    className ={classes.Modal}
    >
        {props.children}
    </div>
    </Aux>
);
export default modal; 