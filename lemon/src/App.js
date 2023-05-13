import './App.css';
import BookingPage from './BookingPage';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Main from './Main';
import React from "react"

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
