import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginPage';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="" element={<LoginPage/>} />
          <Route path="/main" element={<MainPage/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
