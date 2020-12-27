import React from 'react';
import Card from '../Card/Card';
import Classes from './CardsContainer.module.scss';

const CardsContainer = () => {
    return (
        <div className={Classes.container}>
            <div className={Classes.cards__container}>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
}

export default CardsContainer
