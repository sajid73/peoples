import React, { useState } from "react";
import "./People.css";

const People = ({ people }) => {
  // declaring necessary states
  const [category, setCategory] = useState("");
  const [species, setSpecies] = useState("");

  // data fetching
  fetch(people.homeworld)
    .then((res) => res.json())
    .then((data) => setCategory(data.name));

  // checking if there is any species otherwise it will show blank
  if (people.species[0] !== undefined) {
    fetch(people.species[0])
      .then((res) => res.json())
      .then((data) => setSpecies(data.name));
  }

  return (
    <div className="people_card">
      <div className="infos">
        <h4>{people.name}</h4>
        <p>{category ? category : "Loading..."}</p>
      </div>
      <div className="category">
        {/* if there is no species from api data, by default it will show 'human' */}
        <p>{species ? `${species}` : "Human"}</p>
      </div>
    </div>
  );
};

export default People;
