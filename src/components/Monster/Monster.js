import React from 'react';
import './Monster.css';

const Monster = ({ currentMonster, setMonsterIsBeingDisplayed }) => {

    const data = currentMonster[0];

    return(
        <div className='monster-container'>
            <button onClick={() => setMonsterIsBeingDisplayed(false)}>RETURN TO HOMEPAGE</button>
            <p>Monster name: {data.name}</p>
            <p>Monster first information: <br />
                {data.information[0]}
            </p>
            <p>Monster second information: <br />
                {data.information[1]}
            </p>
            <p>
                Monster third information: <br/> 
                {data.information[2]}
            </p>
            <p>Monster image #1</p>
            <img src={data.images[0]} alt='' />
            <p>Monster image #2</p>
            <img src={data.images[1]} alt='' />
        </div>
    );

};

export default Monster;