import { Paper } from '@mui/material';
import React from 'react';
import ContentList from '../components/ContentList';
import SearchBar from '../components/SearchBar';

const HomePage: React.FC = () => {
  return (
    <Paper sx={{ p: "50px 75px 0 75px"}}>
      <SearchBar />
      <ContentList />
    </Paper>
  );
}

export default HomePage;