import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';

import classes from './Banner.module.scss';

const Banner = (props) => {
    return (
        <div className={classes.banner__container}>
            <div className={classes.banner__user}>
                <img src="https://images.pexels.com/photos/2527491/pexels-photo-2527491.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="user_image" className={classes.banner__image} />
            </div>
            <div className={classes.banner__welcome}>
                <p className={classes.banner__name}>Sebastian Rivera Giraldo</p>
                <p className={classes.banner__message}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <SubmitButton value="Let's work!  "></SubmitButton>
            </div>
        </div>
    )
}

export default Banner;
