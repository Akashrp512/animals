import React, { useState } from 'react';

const AnimalShow = () => {

    const [count, setCount] = useState(0);

const handleClick = () =>{
    setCount(count + 1);
}
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <h2>Number of animals: {count}</h2>
    </div>
  )
}

export default AnimalShow
