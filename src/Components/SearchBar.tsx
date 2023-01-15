import React from 'react';
import SearchField from './SearchField';

const SearchBar: React.FC = () => {
  
  return (
    <>
      <h1>Filter by keywords</h1>
      <SearchField />
      <p>Results: { }</p>
      <div style={{ borderTop: "1px solid lightgrey"}}/>
    </>
  );
}

export default SearchBar;