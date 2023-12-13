import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { petData } from "../../data";

export const PetDetails = () => {
  const { petId } = useParams();

  const [pet, setPet] = useState(null);
  const [loading, setloading] = React.useState(true);

  //write a function to return the items from the array
  const findPetById = () => {
    let pet = petData.find((item) => item.id === petId);
    setPet(pet);
    return pet;
  };

  React.useEffect(() => {
    findPetById();

    const timeOut = setTimeout(() => {
      setloading(false);
    }, 3000);
  });

  if (loading) {
    return <h2>Getting Pet Info...</h2>;
  }

  return (
    <div>
      <h3>Hello</h3>
      <h2>{pet.name}</h2>
    </div>
  );
};

export default PetDetails;
