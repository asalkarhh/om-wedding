import React from 'react';
import { GoldDivider, MapPinIcon } from './Decorations';

export default function Venue({ data }) {
  const { heading, name, address, mapsUrl, mapsButtonText } = data.venue;

  return (
    <section className="section venue-section reveal-on-scroll" id="venue" aria-labelledby="venue-heading">
      <div className="container">
        <header className="section-header reveal-on-scroll">
          <span className="section-subtitle">आपले स्वागत आहे</span>
          <h2 id="venue-heading" className="section-title">
            {heading}
          </h2>
          <GoldDivider />
        </header>

        <div className="venue-card-wrapper reveal-on-scroll">
          <article className="venue-card">
            <div className="venue-pin-badge" aria-hidden="true">
              <MapPinIcon className="venue-pin-svg" />
            </div>

            <h3 className="venue-name">{name}</h3>

            <p className="venue-address">{address}</p>

            <div className="venue-action">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-venue"
                aria-label={`${name} - गुगल मॅप्सवर पत्ता उघडा`}
              >
                <MapPinIcon className="btn-icon" />
                <span>{mapsButtonText}</span>
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="external-icon"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            <p className="venue-note">
              (बटणावर क्लिक केल्यास गुगल मॅप्स ॲपमध्ये थेट लोकेशन उघडेल)
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
