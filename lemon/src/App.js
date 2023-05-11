import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';
import React from "react"

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
