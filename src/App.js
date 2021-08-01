
import React from 'react'
import Hero from './components/hero/hero'
import Caps from './components/capabilities/capabilities'
import Checklist from './components/checklist/checklist'
import Chart from './components/chart/chart'
import HeroDivider from './components/hero/divider/hero-divider'
import Quote from './components/quote/quote'
import Haufig from './components/haufig/haufig'
import ContentContainer from './components/block/block'
import Partners from './components/partners/partners'
import './global-css/style.scss';

import HeroTwo from './images/hero-2.jpg'
import HeroThree from './images/hero-3.jpg'

function App() {
  return (

    <div className="App">
      <Hero />
      <ContentContainer><Caps /></ContentContainer>
      <ContentContainer><Checklist /></ContentContainer>
      <HeroDivider image={ HeroTwo } imageAlt="Here is the alt text" />
      <ContentContainer><Chart /></ContentContainer>
      <HeroDivider image={ HeroThree } imageAlt="Here is the alt text" />
      <ContentContainer><Quote /></ContentContainer>
      <ContentContainer bgColor="white"><Haufig /></ContentContainer>
      <ContentContainer bgColor="white"><Partners /></ContentContainer>
    </div>

  );
}

export default App;
