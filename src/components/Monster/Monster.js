import React from 'react';
import './Monster.css';

const Monster = ({ currentMonster, setMonsterIsBeingDisplayed }) => {

    const data = currentMonster[0];
    console.log(data);

    return (

        <article className='monster-container'>

            <button className='button-homepage' onClick={() => setMonsterIsBeingDisplayed(false)}>&larr; Homepage</button>

            <figure className='monster-model'>
                <img src={data.images.model.url} alt='' title={data.images.model.title} />
                <figcaption>{data.name}</figcaption>
            </figure>
            
            <section className='monster-information'>

                <p>{data.information[0]}</p>

                <figure className='monster-quote'>
                    <blockquote>
                        {data.quote.text}
                    </blockquote>
                    <figcaption>
                        {data.quote.author}
                    </figcaption>
                </figure>

                <p>{data.information[1]}</p>

                <figure className="monster-illustration">
                    <img src={data.images.illustration.url} alt='' />
                    <figcaption>
                        {data.images.illustration.caption}
                    </figcaption>
                </figure>

                <p>{data.information[2]}</p>

            </section>

            {
                data.tactics.length !== 0 ?
                <section className='monster-tactics'>
                    <h1>Combat tactics</h1>
                    {
                        Object.entries(data.tactics).map(tactic => {
                            const [key, paragraph] = tactic;
                            return <p key={key}>{paragraph}</p>
                        })
                    }
                </section> 
                : ''
            }

            <section className='monster-appearances'>
                <h1>Appearances</h1>
                <p>
                    {data.pluralName} have appeared in the following 
                    {
                        data.appearances.filter(appearance => {
                            if (appearance.hasAppeared) {
                                return true;
                            } else {
                                return false;
                            }
                        }).length === 1 ? ' game ' : ' games '
                    } 
                    of <strong>CD PROJEKT RED's The Witcher</strong> franchise: 
                </p>
                <ul>
                    {
                        data.appearances.map(appearance => {
                            if (appearance.hasAppeared) {
                                return <li key={appearance.id}><span></span>{appearance.game}</li>
                            }
                            return null;
                        })
                    }
                </ul>
            </section>

            <section className='monster-references'>
                <h1>References</h1>
                <ul>
                    {
                        data.references.map(reference => {
                            return <li key={reference.id}>
                                <a href={reference.link} target='_blank' rel='noopener noreferrer'>
                                    <span>{reference.id}.</span> {reference.reference}
                                </a>
                            </li>
                        })
                    }
                </ul>
            </section>

        </article>
    );

};

export default Monster;