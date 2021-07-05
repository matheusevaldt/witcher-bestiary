import React, { useEffect } from 'react';
import './Monster.css';

const Monster = ({ currentMonster, setMonsterIsBeingDisplayed }) => {

    const data = currentMonster[0];
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className='monster-container'>
            <button className='button-homepage' onClick={() => setMonsterIsBeingDisplayed(false)}>&larr; Homepage</button>
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
            {
                data.tactics.length !== 0 ?
                <div className='monster-tactics'>
                    <h1>Combat tactics</h1>
                    {
                        Object.entries(data.tactics).map(tactic => {
                            const [key, paragraph] = tactic;
                            return <p key={key}>{paragraph}</p>
                        })
                    }
                </div> 
                : ''
            }
            <div className='monster-references'>
                <h1>References</h1>
                <ul>
                    {
                        data.references.map(reference => {
                            return <li key={reference.id}>
                                <a href={reference.link}>
                                    <span>{reference.id}.</span> {reference.reference}
                                </a>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );

};

export default Monster;