import React, {useState} from 'react'
import Contact from '../components/ContactSection';
import Footer from '../components/Footer';
import HomeSection from '../components/HomeSection';
import InfoSection from '../components/InfoSection';
import { DataBlockOne, DataBlockTwo } from '../components/InfoSection/data';
import Navbar from '../components/NavigationBar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection />
      <InfoSection {...DataBlockOne} />
      <Services />      
      <InfoSection {...DataBlockTwo} />
      <Contact />
      <Footer />
    </>
  )
}

export default Home