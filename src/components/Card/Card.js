import React from 'react';
import Classes from './Card.module.scss';

const Card = () => {
    return (
        <div className={Classes.card__container}>
            <a href="#" className={Classes.card__link}>
                <span className={Classes.card__image}>
                    <img src="https://images.pexels.com/photos/793759/pexels-photo-793759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="foto" />
                </span>
                <div className={Classes.card__body}> 
                    <span className={Classes.card__title}>Card Title</span>
                    <span className={Classes.card__category}>Card Category</span>
                </div>
            </a>
        </div>
    )
}

export default Card;
