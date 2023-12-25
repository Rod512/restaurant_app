import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Appstote from './components/Appstote';
import Footer from './components/Footer';


const App = () => {
  

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200" >
      <Navbar/>
      <Hero/>
      <Menu/>
      <Banner/>
      <Appstote/>
      <Footer/>
    </div>
  );
};

export default App;