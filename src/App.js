import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Pages/Footer/Footer';
import Home from './Components/Pages/HomePage/Home';
import NavBar from "./Components/Pages/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
