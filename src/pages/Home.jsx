import React from 'react'
import Nevbar from '../components/header/Nevbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/Home/Hero'
import SolarEnergycards from '../components/Home/Card'
import BannerLayout5 from '../components/Home/Section'
import BankingInvestmentSection from '../components/Home/Section2'
import BankingHeroSection from '../components/Home/Section3'
import CryptoCard from "../components/Home/Section4.jsx";
import QuoteRequestSection from '../components/Home/Section5'

function Home() {
  return (
    <div>
      <Nevbar />
      <Hero />
      <SolarEnergycards />
      <BannerLayout5 />
      <BankingInvestmentSection />
      <BankingHeroSection />
      <CryptoCard />
      <QuoteRequestSection />
      <Footer />
    </div>
  );
}

export default Home
