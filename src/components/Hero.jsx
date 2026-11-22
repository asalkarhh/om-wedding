import React from 'react';
import { GaneshMotif, GoldDivider } from './Decorations';

export default function Hero({ data }) {
  const { invocation, badge, date, invitationCopy, ctaButtonText, photo } = data.hero;
  const { namesDisplay } = data.couple;

  const handleScrollToProgramme = (e) => {
    e.preventDefault();
    const target = document.getElementById('programme');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Set focus to the section heading for accessibility
      const heading = target.querySelector('h2');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }
  };

  return (
    <header className="hero-section" id="hero">
      <div className="hero-container">
        {/* Left Column (Desktop) / Primary Viewport Content (Mobile) */}
        <div className="hero-content">
          <div className="hero-invocation">
            <GaneshMotif className="hero-ganesh-icon" />
            <p className="hero-invocation-text">{invocation}</p>
          </div>

          <div className="hero-badge-wrap">
            <span className="hero-badge">{badge}</span>
          </div>

          <h1 className="hero-couple-names">{namesDisplay}</h1>

          <div className="hero-date-wrapper">
            <span className="hero-calendar-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <p className="hero-date">{date}</p>
          </div>

          <p className="hero-invitation-copy">{invitationCopy}</p>

          <div className="hero-actions">
            <a
              href="#programme"
              onClick={handleScrollToProgramme}
              className="btn btn-primary"
              aria-label="विवाह कार्यक्रम पाहा"
            >
              <span>{ctaButtonText}</span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="btn-arrow"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>

          <GoldDivider className="hero-divider hero-divider--desktop" />
        </div>

        {/* Right Column (Desktop) / Portrait Frame (Mobile) */}
        <div className="hero-media">
          <figure className="hero-portrait-card">
            <div className="hero-arch-outer">
              <div className="hero-arch-inner">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="eager"
                  fetchPriority="high"
                  className="hero-portrait-img"
                />
              </div>
            </div>
            <figcaption className="photo-caption hero-caption">
              {photo.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </header>
  );
}
