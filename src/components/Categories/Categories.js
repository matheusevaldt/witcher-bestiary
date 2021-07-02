import React, { useEffect } from 'react';
import './Categories.css';

import synopsisImage from '../../assets/images/synopsis-image.png'
import Category from '../Category/Category';

const Categories = ({ categories, setCategories, monsterData, setMonsterData, monsterIsBeingDisplayed, setMonsterIsBeingDisplayed }) => {
    
    const fetchCategories = () => {
        fetch('data/categories.json')
            .then(response => response.json())
            .then(data => setCategories(data.categories));
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (

        <div className='categories-container'>
            <div className="synopsis-container">
                <img src={synopsisImage} alt="The Witcher Bestiary" />
                <p>
                    <strong>The Witcher Bestiary</strong> is a vast volume containing information about the living and mythical creatures that have appeared in the world of The Witcher.
                </p>
            </div>
            <div className="toc-container">
                <div className="toc-header">
                    <h1>Contents</h1>
                </div>
                <div className="toc-list">
                    {
                        categories.map(category => {
                            const id = category.idCategory;
                            const name = category.nameCategory;
                            const anchor = `#${id}`;
                            return <a href={anchor} key={name}><span>{id}.</span> {name}</a>
                        })
                    }
                </div>
            </div>
            <div className='categories'>
                {
                    categories.map(category => (
                        <Category 
                            category={category}
                            nameCategory={category.nameCategory}
                            monsters={category.monsters}
                            monsterData={monsterData}
                            setMonsterData={setMonsterData}
                            monsterIsBeingDisplayed={monsterIsBeingDisplayed}
                            setMonsterIsBeingDisplayed={setMonsterIsBeingDisplayed}
                            key={category.idCategory}
                        />
                    ))
                }
            </div>
        </div>

    );

};

// fetch('../../../public/data/categories.json')

export default Categories;