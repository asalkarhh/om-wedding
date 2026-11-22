import React from 'react';
import { weddingData } from './data/invitationData';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Programme from './components/Programme';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Closing from './components/Closing';
import PetalsCanvas from './components/PetalsCanvas';
import MobileQuickBar from './components/MobileQuickBar';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <div className="wedding-app">
      <PetalsCanvas />
      <main id="main-content">
        <Hero data={weddingData} />
        <Countdown data={weddingData} />
        <Programme data={weddingData} />
        <Venue data={weddingData} />
        <Gallery data={weddingData} />
      </main>
      <Closing data={weddingData} />
      <MobileQuickBar data={weddingData} />
    </div>
  );
}
