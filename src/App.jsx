// import './App.css';
// import animalData from './data.json';
// import Card from './components/Card';
// import React, { useState } from 'react';

// function App() {

//   const [animals, setAnimals] = useState(animalData);

//   return (
//     <div className="App">
//       <h1>Adopt me plz 🐾</h1>
//       {animals.map(elem => {
//         return <Card key={elem._id} animals={elem} />
//       })}
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from 'react';
import animalData from './data.json';
import Card from './components/Card';

function App() {
  const [animals, setAnimals] = useState(animalData);

  const handleSortByLife = () => {
    const sortedByLife = [...animals].sort((a,b) => a.lifeExpectancy - b.lifeExpectancy);
    setAnimals(sortedByLife);
  }

  const handleFilterDogs = () => {
    const filteredDogs = animalData.filter(elem => elem.type === 'dog');
    setAnimals(filteredDogs);
  }

  return (
    <div className="App">
      <h1>Adopt me plz 🐾</h1>
      <button className="action-btn" onClick={handleSortByLife}> Sort by life expectancy </button>
      <button className="action-btn" onClick={handleFilterDogs}> Filter dogs </button>
      {animals.map(elem => {
        return <Card key={elem._id} animal={elem}/>
      })}
    </div>
  );
}

export default App;