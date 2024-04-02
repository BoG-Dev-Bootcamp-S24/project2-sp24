import React, { useState, useEffect } from "react";
import { AnimalCard } from "./AnimalCard";
import { TitleBar } from "./TitleBar";

export const AdminaAnimals = () => {
  const [animalData, setAnimalData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetchData()
      .then(data => setAnimalData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        <TitleBar className="absolute left-0 top-0" img="vector-2.svg" vector="vector-3.svg" />
        <NavBar />
        <div className="grid grid-cols-3 gap-8 px-8 py-8">
          {animalData.map((animal, index) => (
            <AnimalCard
              key={index}
              className="w-full"
              image={animal.image}
              name={animal.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
