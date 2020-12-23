import React from 'react'

import classes from './MainNav.module.scss';

const MainNav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.nav__logo}>SRG</div>
            Hola esta es la barra de navegación
        </nav>
    );
};

export default MainNav;
