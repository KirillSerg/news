import React from 'react';
import './App.css';
import ContentList from './Components/ContentList';
import SearchBar from './Components/SearchBar';

const App: React.FC = () => {
  return (
    <>
      <SearchBar />
      <ContentList />
    </>
  );
}

export default App;
