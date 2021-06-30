import React, { useEffect } from 'react';
import './Categories.css';

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
            <div className='category'>
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