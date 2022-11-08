import React from 'react';
import './App.css';
import Haeder from './components/haeder/Haeder';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div>
      <Haeder />
      <Nav />
      <About />
      <Experience />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
