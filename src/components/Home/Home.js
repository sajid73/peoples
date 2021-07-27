import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import PeopleList from "../PeopleList/PeopleList";
import Searchbar from "../Searchbar/Searchbar";
import SearchResult from "../SearchResult/SearchResult";

const queryClient = new QueryClient()

const Home = ({people, setPeople}) => {
  return (
    <div>
      <Searchbar setPeople={setPeople} />
      {people && <h3 style={{margin: '10px'}}>Searching for: {people}</h3>}
      <QueryClientProvider client={queryClient}>
        {/* showing result or people list */}
        {people ? <SearchResult search={people} /> : <PeopleList />}
      </QueryClientProvider>
    </div>
  );
};

export default Home;
