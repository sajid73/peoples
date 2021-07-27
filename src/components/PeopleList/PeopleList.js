import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import People from '../People/People';


const PeopleList = () => {
    // state for page number
    const [page, setPage] = useState(1)
    const history = useHistory();

    // functions
    const fetchPeopleData = async (key) => {
        const data = await fetch(`https://swapi.dev/api/people/?page=${key.queryKey[1]}`)
        return data.json();
    }
    const peopledetails = (people) => {
        const singlePerson = people.url.slice(29,30);
        history.push(`/api/people/${singlePerson}`)
    }
    
    const { data, status } = useQuery(['people', page], fetchPeopleData);
    
    return (
        <div>
            {
                status === 'success' && data.results ?
                data.results.map(people => <div key={people.name} onClick={() => peopledetails(people)}><People people={people} /></div>) :
                <div>
                    <h1 className="error">No more data available</h1>
                    <Link to="/">Go to home</Link>
                </div>
            }
            {
                status === 'loading' && <h1 className="loading">Loading. Please wait!</h1>
            }
            {
                status === "error" && <h1 className="error">Something went wrong!</h1>
            }
            <div>
                {/* for pagination */}
                {
                    page === 1 ? '' : <button onClick={()=> setPage(pre => pre-1)} className="pagination-button">Prev</button>
                }
                {page}
                {
                    true ? <button onClick={()=> setPage(pre => pre+1)} className="pagination-button">Next</button> : ""
                }
            </div>
        </div>
    );
};

export default PeopleList;