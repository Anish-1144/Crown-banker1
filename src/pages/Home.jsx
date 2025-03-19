import React from 'react'
import Nevbar from '../components/header/Nevbar'
import Footer from '../components/footer/Footer'
import Hero from '../components/Home/Hero'
import SolarEnergycards from '../components/Home/Card'
import BannerLayout5 from '../components/Home/Section'
import BankingInvestmentSection from '../components/Home/section2'
import BankingHeroSection from '../components/Home/section3'
import CryptoCard from "../components/Home/section4";
import QuoteRequestSection from '../components/Home/section5'

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
