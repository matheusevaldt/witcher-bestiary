import React from 'react';
import './Category.css';

import Monster from '../Monster/Monster';

const Category = ({ category, nameCategory, monsters, monsterData, setMonsterData, monsterIsBeingDisplayed, setMonsterIsBeingDisplayed }) => {

    const fetchMonsterData = async (event) => {
        const monstersResponse = await fetch('data/monsters.json');
        const monstersRawData = await monstersResponse.json();
        let monstersData = monstersRawData.monsters;
        setMonsterData(monstersData.filter(monster => monster.idMonster === event.target.id));
        setMonsterIsBeingDisplayed(true);
        <Monster 
            monsterData={monsterData}
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