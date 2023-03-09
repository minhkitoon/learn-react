import React from 'react';
import {
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header logo={'MinhReact'} />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/about" element={ <About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
