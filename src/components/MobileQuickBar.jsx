import React, { useState, useEffect } from 'react';
import { ClockIcon, MapPinIcon } from './Decorations';

export default function MobileQuickBar({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const mapsUrl = data.venue.mapsUrl;

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 280px (after the hero top)
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToProgramme = (e) => {
    e.preventDefault();
    const target = document.getElementById('programme');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`mobile-quickbar ${isVisible ? 'is-visible' : ''}`}
      aria-label="जलद लिंक्स"
    >
      <div className="mobile-quickbar-inner">
        <a
          href="#programme"
          onClick={handleScrollToProgramme}
          className="quickbar-btn quickbar-btn--programme"
          aria-label="विवाह कार्यक्रम पाहा"
        >
          <ClockIcon className="quickbar-icon" />
          <span>कार्यक्रम</span>
        </a>

        <span className="quickbar-sep" aria-hidden="true" />

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="quickbar-btn quickbar-btn--map"
          aria-label="गुगल मॅप्सवर विवाहस्थळ पाहा"
        >
          <MapPinIcon className="quickbar-icon" />
          <span>नकाशा (Map)</span>
        </a>
      </div>
    </nav>
  );
}
