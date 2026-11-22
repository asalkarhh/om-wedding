import React, { useState, useEffect } from 'react';
import { GoldDivider, KalashIcon } from './Decorations';

// Convert number to 2-digit padded string
const pad2 = (n) => String(Math.max(0, n)).padStart(2, '0');

// Convert digits to Marathi Devanagari script
const toMarathiDigits = (str) => {
  const marathiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return String(str).replace(/\d/g, (d) => marathiDigits[Number(d)]);
};

export default function Countdown({ data }) {
  const { targetTime, heading, subtitle, labels, completedMessage } = data.countdown;

  const calculateTimeLeft = () => {
    const targetDate = new Date(targetTime).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const units = [
    { key: 'days', label: labels.days, value: timeLeft.days },
    { key: 'hours', label: labels.hours, value: timeLeft.hours },
    { key: 'minutes', label: labels.minutes, value: timeLeft.minutes },
    { key: 'seconds', label: labels.seconds, value: timeLeft.seconds, isSeconds: true },
  ];

  return (
    <section className="countdown-section" id="countdown" aria-labelledby="countdown-heading">
      <div className="container">
        <div className="countdown-card">
          <header className="countdown-header">
            <span className="countdown-badge">
              <KalashIcon className="countdown-badge-icon" />
              <span>{subtitle}</span>
            </span>
            <h2 id="countdown-heading" className="countdown-title">
              {heading}
            </h2>
            <GoldDivider className="countdown-divider" />
          </header>

          {timeLeft.isCompleted ? (
            <div className="countdown-completed" role="status" aria-live="polite">
              <span className="countdown-completed-icon">🎉</span>
              <p className="countdown-completed-msg">{completedMessage}</p>
            </div>
          ) : (
            <div
              className="countdown-grid"
              role="timer"
              aria-label={`${timeLeft.days} ${labels.days}, ${timeLeft.hours} ${labels.hours}, ${timeLeft.minutes} ${labels.minutes}, ${timeLeft.seconds} ${labels.seconds}`}
            >
              {units.map((unit) => {
                const paddedEn = pad2(unit.value);
                const marathiVal = toMarathiDigits(paddedEn);

                return (
                  <div
                    key={unit.key}
                    className={`countdown-box ${unit.isSeconds ? 'countdown-box--seconds' : ''}`}
                  >
                    <div className="countdown-number-wrapper">
                      <span className="countdown-digit countdown-digit--en">{paddedEn}</span>
                      <span className="countdown-digit-mr" aria-hidden="true">
                        ({marathiVal})
                      </span>
                    </div>
                    <span className="countdown-unit-label">{unit.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          <p className="countdown-target-note">
            शुभविवाह मुहूर्त: गुरुवार, २६ नोव्हेंबर २०२६ • दुपारी १२:५० वाजता
          </p>
        </div>
      </div>
    </section>
  );
}
