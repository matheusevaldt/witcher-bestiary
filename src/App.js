import React, { useEffect, useState } from 'react';
import './App.css';

// Importing components.
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Monster from './components/Monster/Monster';
import Footer from './components/Footer/Footer';

// TO-DOS
// Fix scroll when rendering a monster
// Add CSS to the monster's 2nd image
// https://witcher-games.fandom.com/wiki/Category:The_Witcher_3_bestiary
// https://tinypng.com/

function App() {

  const [categories, setCategories] = useState([]);
  const [currentMonster, setCurrentMonster] = useState([]);
  const [monsterIsBeingDisplayed, setMonsterIsBeingDisplayed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [monsterIsBeingDisplayed]);

  return (
    <div className="App">
      <Header />
      {
        !monsterIsBeingDisplayed 
        ? <Categories 
            categories={categories} setCategories={setCategories} 
            currentMonster={currentMonster} setCurrentMonster={setCurrentMonster}
            setMonsterIsBeingDisplayed={setMonsterIsBeingDisplayed}
          /> 
        : <Monster 
            currentMonster={currentMonster}
            setMonsterIsBeingDisplayed={setMonsterIsBeingDisplayed}
          />
      }
      <Footer />
    </div>
  );

}

export default App;
