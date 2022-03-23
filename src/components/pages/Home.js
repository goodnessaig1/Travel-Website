import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';


 import HeroSection from '../HeroSection';
 import AppContainer from '../HOC/AppContainer';

 function Home () {
     return (
         <AppContainer>
         <HeroSection />
         <Cards/>
         <Footer/>
         </AppContainer>
     )
 }
 export default Home;