import React from 'react';

import classes from './Order.css';

const order = (props) => {
    return (
        <div className={classes.Order}>
            <p>Ingredients: Meat(1)</p>
            <p>Price: <strong>$5.5</strong></p>
        </div>
    );
}

export default order;