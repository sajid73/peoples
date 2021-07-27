import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PeopleDetails.css";
import Vehicle from "./Vehicle";

const PeopleDetails = () => {
  const [peopledetails, setPeopledetails] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch("https://swapi.dev/api/people/" + id)
      .then((res) => res.json())
      .then((data) => {
        setPeopledetails(data);
      });
  }, [id]);
  return (
    <div className="singleDetails">
      {peopledetails && (
        <>
          <h1>{peopledetails.name}</h1>
          <h3 className="vehicles">Vehicles</h3>
          <ul>
            {
                peopledetails.vehicles.map(vehicle => <Vehicle key={vehicle} vehicle={vehicle} />)
            }
          </ul>
          <h3 className="vehicles">Height: {peopledetails.height} cm</h3>
          <h3 className="vehicles">Mass: {peopledetails.mass} kg</h3>
        </>
      )}
    </div>
  );
};

export default PeopleDetails;
