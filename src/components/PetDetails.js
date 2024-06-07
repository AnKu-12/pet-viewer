import React from 'react';

const PetDetails = ({ pet }) => {
  console.log('Rendering PetDetails with pet:', pet); 

  return (
    <div className="PetDetails">
      <h2>Pet Details</h2>
      <p><strong>Name :</strong> {pet.name}</p>
      <p><strong>Type :</strong> {pet.type}</p>
      <p><strong>Breed :</strong> {pet.breed}</p>
      <p><strong>Age :</strong> {pet.age} yr</p>
      <p><strong>Color :</strong> {pet.color}</p>
      <p><strong>Description :</strong> {pet.description}</p>
    </div>
  );
};

export default PetDetails;
