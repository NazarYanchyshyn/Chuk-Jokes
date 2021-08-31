import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
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
    const obj = allCategories.map(item => ({
      name: item,
      route: `random?category=${item}`,
    }));

    obj.push({
      name: 'random',
      route: 'random',
    });
    setCategories(obj);
    setPhrase(randomPhrase.value);
    setIcon(randomPhrase.icon_url);
  }, []);

  const getPhrase = async(item) => {
    const randomPhrase = await getJoke(item);

    setPhrase(randomPhrase.value);
  };

  return (
    <>
      <Header icon={icon} />
      <main>
        <div className="title-container">
          <h1 className="title">Categories</h1>
        </div>
        <div className="buttons-container">
          {categories.length > 0
            ? (
              categories.map(item => (
                <CategoriesButton
                  key={item.name}
                  name={item.name}
                  getJoke={() => getPhrase(item.route)}
                />
              ))
            ) : (
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) }
        </div>
        <Phrase phrase={phrase} />
      </main>
    </>
  );
};
