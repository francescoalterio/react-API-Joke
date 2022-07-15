import React, { useState, useEffect } from 'react';
import Single from './components/Single';
import Twopart from './components/Twopart';
import './style.css';

export default function App() {
  const [joke, setJoke] = useState();
  const [showDelivery, setShowDelivery] = useState(false);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then((res) => res.json())
      .then((result) => setJoke(result));
  }, []);

  const handleNewJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then((res) => res.json())
      .then((result) => {
        setShowDelivery(false);
        setJoke(result);
      });
  };

  return (
    <div className="background">
      <div className="container">
        <h1>Joke</h1>
        <h3 className="category-container">
          Category: <span>{joke?.category}</span>
        </h3>
        <div
          style={{
            width: '100%',
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {joke?.type === 'single' ? (
            <Single joke={joke.joke} />
          ) : (
            <Twopart
              setup={joke?.setup}
              delivery={joke?.delivery}
              showDelivery={showDelivery}
              setShowDelivery={setShowDelivery}
            />
          )}
        </div>
        <button className="btn-next" onClick={handleNewJoke}>
          New Joke
        </button>
      </div>
    </div>
  );
}
