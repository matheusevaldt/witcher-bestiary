import React from 'react';
import './Category.css';

import Monster from '../Monster/Monster';
import { monsters_data } from '../Monster/monsters_data.js';

const Category = ({ category, nameCategory, monsters, currentMonster, setCurrentMonster, monsterIsBeingDisplayed, setMonsterIsBeingDisplayed }) => {

    const fetchMonsterData = (event) => {
        const selectedMonster = monsters_data.filter(monster => monster.id === event.target.id);
        setCurrentMonster(selectedMonster);
        setMonsterIsBeingDisplayed(true);
        <Monster
            currentMonster={currentMonster}
            setMonsterIsBeingDisplayed={setMonsterIsBeingDisplayed}
        />
    };

    const handleCategoryDisplay = (event) => {
        const list = event.target.parentElement.nextSibling;
        const icon = event.target.firstElementChild;
        if (icon.className === 'fas fa-chevron-down') {
            icon.className = 'fas fa-chevron-up';
            list.style.height = '0';
        } else {
            icon.className = 'fas fa-chevron-down';
            list.style.height = 'auto';
        }
    };

    return (
        <div className='category-container' id={category.idCategory}>
            <div className='category-header'>
                <h1>{nameCategory}</h1>
                <button onClick={(event) => handleCategoryDisplay(event)}>
                    <i className="fas fa-chevron-down"></i>
                </button>
            </div>
            <ul className='category-monsters'>
                {
                    monsters.map(monster => {
                        return <li id={monster} key={monster} onClick={(event) => fetchMonsterData(event)}>
                            <span></span>{monster}
                        </li>
                    }) 
                }
            </ul>
        </div>
    );

};

export default Category;