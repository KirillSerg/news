import { Box, Typography } from '@mui/material';
import React from 'react';
import SearchField from './SearchField';

const SearchBar: React.FC = () => {
  
  return (
    <>
      <Typography>Filter by keywords</Typography>
      <SearchField />
      <Typography>Results: { }</Typography>
      <Box style={{ borderTop: "1px solid lightgrey"}}/>
    </>
  );
}

export default SearchBar;