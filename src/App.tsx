import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContentPage from './pages/ContentPage';
import HomePage from './pages/HomePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/content/:id" element={<ContentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
