import React, { useState } from 'react';
import './PeopleDetails.css';

const Vehicle = ({vehicle}) => {
    const [vehicles, setVehicles] = useState('')
    fetch(vehicle)
      .then(res => res.json())
      .then(data=> setVehicles(data.name))
    return (
        <li className="vehicle">- {vehicles}</li>
    );
};

export default Vehicle;