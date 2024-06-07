
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetDropdown from './components/PetDropdown';
import PetDetails from './components/PetDetails';
import './App.css'; 

const App = () => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  useEffect(() => {
    
    axios.get('https://run.mocky.io/v3/85f927e5-acb4-4806-bd5d-b35127f73a0b') 
      .then(response => {
        console.log('API response:', response.data); 
        setPets(response.data);
      })
      .catch(error => {
        console.error('Error fetching the pet data:', error);
      });
  }, []);

  const handlePetChange = (petId) => {
    console.log('Selected pet ID:', petId); 
    const pet = pets.find(p => p.id === parseInt(petId));
    console.log('Selected pet details:', pet); 
    setSelectedPet(pet);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="greeting">
          Hi! <span className="dog" role="img" aria-labelledby="wave">
            🐶
          </span>{" "}Welcome to Pet Viewer

        </h1>
        <PetDropdown pets={pets} onPetChange={handlePetChange} />
        {selectedPet && <PetDetails pet={selectedPet} />}
      </header>
    </div>
  );
};

export default App;


