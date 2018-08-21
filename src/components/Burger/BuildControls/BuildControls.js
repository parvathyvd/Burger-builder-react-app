import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
];

const buildControls = (props) => {
    return ( 
        <div className={classes.BuildControls}>
        <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
        {controls.map(c => (
            <BuildControl 
            key={c.label} 
            label={c.label}
            added ={ ()=> props.ingredientAdded(c.type)}
            removed = { ()=> props.ingredientRemoved(c.type)}
            disabled = {props.disabled[c.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        disabled ={!props.purchaseable}
        onClick={props.orderNow}>ORDER NOW</button>
        </div>
     );
}
 
export default buildControls;