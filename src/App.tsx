import React from 'react';
import './App.css';
import { Paper } from '@mui/material';
import ContentList from './Components/ContentList';
import SearchBar from './Components/SearchBar';

const App: React.FC = () => {
  return (
    <Paper sx={{ p: "50px 75px 0 75px"}}>
      <SearchBar />
      <ContentList />
    </Paper>
  );
}

export default App;
