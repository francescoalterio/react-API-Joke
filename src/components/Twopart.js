import React, { useState, useEffect } from 'react';
import './Twopart.css';

export default function Twopart({
  setup,
  delivery,
  showDelivery,
  setShowDelivery,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelivery(true);
    }, 3000);

    return () => clearTimeout(timer)
  }, [setup]);
  return (
    <>
      <div className="joke-container">
        <p className="joke">{setup}</p>
      </div>
      {showDelivery && (
        <div className="joke-container delivery-container">
          <p style={{ color: 'white' }}>{delivery}</p>
        </div>
      )}
    </>
  );
}
