import React from 'react';
import './Searchbar.css';

const Searchbar = ({setPeople}) => {
    const handleSearch = (e) => {
        setPeople(e.target.value);
    }
    return (
        <div>
            <input className="searchbar" type="text" name="peopleName" placeholder="Search people" onChange={(e) => handleSearch(e)} />
        </div>
    );
};

export default Searchbar;