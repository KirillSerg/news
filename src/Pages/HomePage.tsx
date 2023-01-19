import { Paper } from '@mui/material';
import React from 'react';
import ContentList from '../components/ContentList';
import SearchField from '../components/SearchField';

const HomePage: React.FC = () => {
  return (
    <Paper sx={{ p: "50px 75px 0 75px"}}>
      <SearchField />
      <ContentList />
    </Paper>
  );
}

export default HomePage;