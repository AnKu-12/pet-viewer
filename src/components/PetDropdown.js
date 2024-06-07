import React from 'react';

const PetDropdown = ({ pets, onPetChange }) => {
  const handleChange = (event) => {
    onPetChange(event.target.value);
  };
  console.log('Rendering PetDropdown with pets:', pets);
  return (
  
     <div className="PetDropdown">
      <label htmlFor="pet-select">Explore our pet collection : </label>
      <select id="pet-select" onChange={handleChange}>
        <option value="">--Pick a pet companion--</option>
        {pets.map(pet => (
          <option key={pet.id} value={pet.id}>{pet.name}</option>
        ))}
      </select>
    </div>
  );
};

export default PetDropdown;
