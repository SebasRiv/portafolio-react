import React from 'react';

import Classes from './Content.module.scss';

const Content = () => {
    return (
        <div className={Classes.content__container}>
            <ul className={Classes.content__nav}>
                <li className={Classes.content__item}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 1
                        </span>
                    </a>
                </li>
                <li className={Classes.content__item}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 2
                        </span>
                    </a>
                </li>
                <li className={Classes.content__item}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 3
                        </span>
                    </a>
                </li>
                <li className={Classes.content__item}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 4
                        </span>
                    </a>
                </li>
                <li className={Classes.content__item}>
                    <a href="#" className={Classes.content__link}>
                        <span className={Classes.content__name}>
                            Item 5
                        </span>
                    </a>
                </li>
            </ul>
            <a href="#" className={Classes.content__button}>More</a>
        </div>
    )
}

export default Content
