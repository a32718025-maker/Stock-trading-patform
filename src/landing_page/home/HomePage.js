import React from 'react';
import Hero from './Hero';

import Awards from "./Awards"
import Stats from"./Stats"
import Pricing from"./Pricing"
import Education from"./Education"
import OpenAccount from "../support/OpenAccount"
import Footer from "../support/Footer"
import Navbar from "../support/Navbar"


function HomePage() {
    return ( 
        <>
        <Hero />
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer />
        <Navbar/>
        
        </>
     );
}

export default HomePage;