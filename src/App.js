import React, { useState } from 'react';
import './App.css';
// https://witcher.fandom.com/wiki/The_Witcher_3_bestiary
// Importing components.
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Monster from './components/Monster/Monster';

function App() {

  const [categories, setCategories] = useState([]);
  const [monsterData, setMonsterData] = useState([]);
  const [monsterIsBeingDisplayed, setMonsterIsBeingDisplayed] = useState(false);

  return (
    <div className="App">
      <Header />
      {
        !monsterIsBeingDisplayed ?
        <Categories 
          categories={categories} setCategories={setCategories} 
          monsterData={monsterData} setMonsterData={setMonsterData}
          monsterIsBeingDisplayed={monsterIsBeingDisplayed} setMonsterIsBeingDisplayed={setMonsterIsBeingDisplayed}
        /> 
        : <Monster 
            monsterData={monsterData}
            setMonsterIsBeingDisplayed={setMonsterIsBeingDisplayed}
          />
      }
    </div>
  );

}

export default App;
