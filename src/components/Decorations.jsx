import React from 'react';

/**
 * Traditional Maharashtrian ornamental SVG elements
 * rendered in muted antique gold (#C29B48)
 */

export function GaneshMotif({ className = 'ornament-ganesh' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 6c-1.5 0-2.8 1-3.2 2.4-.7 2.3-.9 4.8-.6 7.2-2.8-1-5.8-.8-8.2.7-2.7 1.7-4 4.8-3.4 8 .8 4.2 4.4 7.2 8.7 7.2h1.2c.4 3 2.1 5.8 4.7 7.4 2.6 1.7 5.9 2.1 8.8 1.2 4.1-1.3 7-5 7-9.3v-3.2c1.8-.7 3.2-2 4-3.8 1.3-2.9.8-6.4-1.3-8.8-2.1-2.4-5.4-3.5-8.5-2.8-.5-3.8-3.3-7.2-7.1-8.3-.7-.5-1.4-.7-2.1-.7zm0 4c2.2 0 4.1 1.5 4.7 3.6.3 1.1-.3 2.2-1.4 2.5-1.1.3-2.2-.3-2.5-1.4-.2-.8-.9-1.3-1.8-1.3-.9 0-1.6.6-1.8 1.4-.3 1.1-1.4 1.7-2.5 1.4-1.1-.3-1.7-1.4-1.4-2.5.6-2.1 2.5-3.7 4.7-3.7zm-8.8 11.2c1.7-.8 3.7-.8 5.4.1.9.5 1.3 1.6.8 2.5-.5.9-1.6 1.3-2.5.8-.8-.4-1.8-.4-2.6 0-1 .6-1.5 1.8-1.2 3 .3 1.5 1.6 2.5 3.2 2.5h.9c1 .1 1.8.8 1.9 1.8.1 1-.6 1.9-1.6 2-5.7.4-10.4-3.6-11.1-9.3-.4-2.4.6-4.8 2.6-6.1 1.3-.8 2.8-1.1 4.1-.7zm15.7 1.8c2.1-.3 4.2.4 5.5 2 1.3 1.5 1.5 3.6.7 5.3-.5 1-1.4 1.8-2.4 2.2-.9.4-2 .1-2.4-.8-.4-.9-.1-2 .8-2.4.4-.2.8-.5 1-.9.4-.9.2-1.8-.4-2.5-.7-.8-1.8-1.2-2.9-1-1 .2-2-.5-2.2-1.5-.2-1 .5-2 1.5-2.2zM24 23c1.7 0 3 1.3 3 3v2c0 1.7-1.3 3-3 3s-3-1.3-3-3v-2c0-1.7 1.3-3 3-3z" />
    </svg>
  );
}

export function GoldDivider({ className = 'ornament-divider' }) {
  return (
    <div className={`divider-wrapper ${className}`} aria-hidden="true">
      <span className="divider-line divider-line--left" />
      <span className="divider-motif">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      </span>
      <span className="divider-line divider-line--right" />
    </div>
  );
}

export function TempleArchOrnament({ className = 'temple-arch-ornament' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 30"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <path d="M5 25 C30 5, 90 5, 115 25" />
      <circle cx="60" cy="8" r="3" fill="currentColor" />
      <path d="M45 14 C52 10, 68 10, 75 14" />
    </svg>
  );
}

export function KalashIcon({ className = 'icon-kalash' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Coconut atop */}
      <path d="M12 2L14 5H10L12 2Z" fill="currentColor" />
      {/* Mango leaves */}
      <path d="M8 6C9 4 11 4 12 5C13 4 15 4 16 6" />
      {/* Pot rim */}
      <path d="M7 7H17" />
      {/* Kalash body */}
      <path d="M8 7C6 10 5 13 6 16C7 19 9 20 12 20C15 20 17 19 18 16C19 13 18 10 16 7" />
      {/* Base */}
      <path d="M9 20H15" />
      {/* Swastik / dot */}
      <circle cx="12" cy="13" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function MapPinIcon({ className = 'icon-map' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = 'icon-clock' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
