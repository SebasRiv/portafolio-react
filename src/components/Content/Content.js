import React, { useState } from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';

import Classes from './Content.module.scss';

const Content = (props) => {

    const[states, setStates] = useState([true, false, false, false, false]);

    const activated = (e, element) => {
        e.preventDefault();
        const newStates = [false, false, false, false, false];

        for (const index in newStates) {
            Number(index) === element ? newStates[index] = true : newStates[index] = false;
        }
        setStates(newStates);
    }
    
    return (
        <div className={Classes.content__container}>
            <ul className={Classes.content__nav}>
                <li className={`${Classes.content__item} ${states[0] ? Classes.active : ''}`} onClick={(e) => activated(e, 0)}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 1
                        </span>
                    </a>
                </li>
                <li className={`${Classes.content__item} ${states[1] ? Classes.active : ''}`} onClick={(e) => activated(e, 1)}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 2
                        </span>
                    </a>
                </li>
                <li className={`${Classes.content__item} ${states[2] ? Classes.active : ''}`} onClick={(e) => activated(e, 2)}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 3
                        </span>
                    </a>
                </li>
                <li className={`${Classes.content__item} ${states[3] ? Classes.active : ''}`} onClick={(e) => activated(e, 3)}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 4
                        </span>
                    </a>
                </li>
                <li className={`${Classes.content__item} ${states[4] ? Classes.active : ''}`} onClick={(e) => activated(e, 4)}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 5
                        </span>
                    </a>
                </li>
            </ul>
            <CardsContainer></CardsContainer>
            <a href="#" className={Classes.content__button}>More</a>
        </div>
    );
}

export default Content
