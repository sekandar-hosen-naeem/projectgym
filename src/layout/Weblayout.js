import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'

import "../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../assets/lib/animate/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";

 
function Weblayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>     
     
  )
}

export default Weblayout