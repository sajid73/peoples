import React from 'react';
import { useQuery } from 'react-query';
import People from '../People/People';

const SearchResult = ({search}) => {
    const fetchSearchData = async () => {
        const url = `https://swapi.dev/api/people/?search=${search}`;
        const data = await fetch(url)
        return data.json();
    }
    const { data, status } = useQuery('search', fetchSearchData)
    return (
        <div>
            {
                status === 'success' && data.results.map(people => <People key={people.name} people={people} />)
            }
            {
                status === 'loading' && <h1 className="loading">Loading. Please wait!</h1>
            }
            {
                status === 'idle' && <h1 className="loading">Loading. Please wait!</h1>
            }
            {
                status === "error" && <h1 className="error">No Match found / something went wrong!</h1>
            }
        </div>
    );
};

export default SearchResult;