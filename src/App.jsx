import React, { useState, useEffect } from 'react';
import './App.scss';
import { getJoke, getCategories } from './chukApi';
import { CategoriesButton } from './Components/CategoriesButton';
import { Header } from './Components/Header';
import { Phrase } from './Components/Phrase';

export const App = () => {
  const [phrase, setPhrase] = useState(null);
  const [categories, setCategories] = useState([]);
  const [icon, setIcon] = useState(null);

  useEffect(async() => {
    const randomPhrase = await getJoke('random');
    const allCategories = await getCategories();

    setCategories(allCategories);
    setPhrase(randomPhrase.value);
    setIcon(randomPhrase.icon_url);
  }, []);

  return (
    <>
      <Header icon={icon} />
      <main>
        <div className="title-container">
          <h1 className="title">Categories</h1>
        </div>
        <div className="buttons-container">
          {categories.map(item => (
            <CategoriesButton
              key={item}
              name={item}
              getJoke={async() => {
                const randomPhrase = await getJoke(`random?category=${item}`);

                setPhrase(randomPhrase.value);
              }}
            />
          ))}
          <CategoriesButton
            name="random"
            getJoke={async() => {
              const randomPhrase = await getJoke('random');

              setPhrase(randomPhrase.value);
            }}
          />
        </div>
        <Phrase phrase={phrase} />
      </main>
    </>
  );
};
