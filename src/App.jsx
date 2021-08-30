import React, { useState, useEffect } from 'react';
import './App.scss';
import { getJoke, getCategories } from './chukApi';
import { CategoriesButton } from './Components/CategoriesButton';

import 'bulma/css/bulma.css';
import { Header } from './Components/Header/Header';
import { Phrase } from './Components/Phrase/Phrase';

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
    <div className="starter">
      <Header icon={icon} />
      <main>
        <button
          type="button"
          onClick={async() => {
            const randomPhrase = await getJoke('random');

            setPhrase(randomPhrase.value);
          }}
        >
          Отримати жарт
        </button>
        <div className="buttons">
          {categories.map(item => (
            <CategoriesButton
              name={item}
              f={async() => {
                const randomPhrase = await getJoke(`random?category=${item}`);

                setPhrase(randomPhrase.value);
              }}
            />
          ))}
        </div>
        <Phrase phrase={phrase} />
      </main>
    </div>
  );
};
