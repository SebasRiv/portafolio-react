import React from 'react';

import classes from './SubmitButton.module.scss';

const SubmitButton = (props) => {
    return (
        <button className={classes.banner__button}>
            {props.value}
            <span className={classes.banner__ball}></span>
        </button>
    )
}

export default SubmitButton;
