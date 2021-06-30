import React from 'react';
import Monster from '../Monster/Monster';

const Category = ({ category, nameCategory, monsters, monsterData, setMonsterData, monsterIsBeingDisplayed, setMonsterIsBeingDisplayed }) => {

    const fetchMonsterData = async (event) => {
        const monstersURL = 'data/monsters.json';
        const monstersResponse = await fetch(monstersURL);
        const monstersRawData = await monstersResponse.json();
        let monstersAdjustedData = monstersRawData.monsters;
        console.log(monstersAdjustedData.filter(monster => monster.idMonster === event.target.id));
        setMonsterData(monstersAdjustedData.filter(monster => monster.idMonster === event.target.id));
        setMonsterIsBeingDisplayed(true);
        <Monster monsterData={monsterData} setMonsterIsBeingDisplayed={setMonsterIsBeingDisplayed} />
    };

    return (
        <div className='category-container' id={category.idCategory}>
            <h1>Category: {nameCategory}, id {category.idCategory}</h1>
            Monsters:
            <ul>
                {
                    monsters.map(monster => {
                        return <li id={monster} key={monster} onClick={(event) => fetchMonsterData(event)}>{monster}</li>
                    }) 
                }
            </ul>
        </div>
    );

};

export default Category;