import React, { useEffect } from 'react';
import './Monster.css';

const Monster = ({ currentMonster, setMonsterIsBeingDisplayed }) => {

    const data = currentMonster[0];
    console.log(data);

    useEffect(() => {
        window.scrollTo(0,0);
     }, [])

    return(
        <div className='monster-container'>
            {/* <button onClick={() => setMonsterIsBeingDisplayed(false)}>RETURN TO HOMEPAGE</button> */}

            <div className='monster-header'>
                <img src={data.images[0]} alt='' />
                <h1>{data.name}</h1>
            </div>

            <div className='monster-information'>
                <p>{data.information[0]}</p>
                <figure className='monster-quote'>
                    <blockquote>
                        {data.quote[0]}
                    </blockquote>
                    <figcaption>
                        {data.quote[1]}
                    </figcaption>
                </figure>
                <p>{data.information[1]}</p>
                <img src={data.images[1]} alt='' />
                <p>{data.information[2]}</p>
            </div>










            {/* <p>Monster name: {data.name}</p>
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
            <img src={data.images[1]} alt='' /> */}
        </div>
    );

};

export default Monster;