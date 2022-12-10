
import './App.css';
import { useState } from 'react';
import AnimalShow from './components/AnimalShow';


function getRandomAnimal() {
  const animals = [ 'bird', 'cat', ' cow', 'dog', 'gator'];

  return animals[Math.floor(Math.random()*animals.length)];
}

function App() {

   const [animals, setAnimals] = useState([]);

   const handleClick = () =>{
    setAnimals([ ...animals, getRandomAnimal()]);
    };

   const renderedAnimals = animals.map((animal, index) =>{
      return <AnimalShow type={animal} key={index} />;
    });

  return (
  
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
      <h1>Show animal</h1>
    </div>
  

    
  );
}

export default App;
