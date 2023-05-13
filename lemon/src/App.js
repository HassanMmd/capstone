import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import React from "react"
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <React.Fragment>
        <HomePage />
        <Main />
        <Footer />
      </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
