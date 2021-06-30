import React, { useEffect } from 'react';

const Monster = ({ monsterData, setMonsterIsBeingDisplayed }) => {

    console.log('aaaaaaaa')
    console.log(monsterData);
    console.log('aaaaaaaa')

    return(
        <div className='monster-container'>
            <button onClick={() => setMonsterIsBeingDisplayed(false)}>RETURN TO HOMEPAGE</button>
            monster name: {monsterData[0].nameMonster} <br />
            monster description: {monsterData[0].description}
        </div>
    );

};

export default Monster;