import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CardDisplay from './CardDisplay';
import FeaturesSection from './FeaturesSection';
import TransactionSection from './TransactionSection';
import SavingSection from './SavingSection';
import NotificationsSection from './NotificationsSection';
import SeamlessIntegrationSection from './SeamlessIntegrationSection';
import CardShow from './CardShow';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Blog from './Blog';
import ContactComponent from './ContactComponent';

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <CardDisplay />
      <FeaturesSection />
      <TransactionSection/>
      <SavingSection/>
      <NotificationsSection/>
      <SeamlessIntegrationSection/>
      <CardShow/>
      <Testimonials/>
      <ContactComponent/>
      <Blog/>
      
      <Footer/>
    </div>
  );
};

export default LandingPage;
