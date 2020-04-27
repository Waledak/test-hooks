import React, { useState } from 'react';

export default function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  function handleChange(event){
    const value= event.target.value;
    value === ""?setCount(0):setCount(parseInt(value));
  }

  return (
    <div>
      <input type="text" onChange={handleChange} value={count}/>
      <p>Le compteur est  à : {count} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}