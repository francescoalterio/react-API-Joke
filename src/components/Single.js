import React from 'react';
import './Single.css';

export default function Single({ joke }) {
  return (
    <div className="joke-container">
      <p className="joke">{joke}</p>
    </div>
  );
}
