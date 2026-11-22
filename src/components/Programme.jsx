import React from 'react';
import { GoldDivider, KalashIcon, ClockIcon } from './Decorations';

export default function Programme({ data }) {
  const { heading, date, venueNotice, events } = data.programme;

  return (
    <section className="section programme-section reveal-on-scroll" id="programme" aria-labelledby="programme-heading">
      <div className="container">
        <header className="section-header reveal-on-scroll">
          <span className="section-subtitle">शुभ मुहूर्त व वेळ</span>
          <h2 id="programme-heading" className="section-title">
            {heading}
          </h2>
          <GoldDivider />
          <div className="programme-main-date" aria-label="कार्यक्रमाचा दिनांक">
            <span className="programme-date-badge">{date}</span>
          </div>
        </header>

        <div className="programme-cards-grid">
          {events.map((event) => {
            const isWedding = event.type === 'wedding';
            const isHaldi = event.type === 'haldi';
            const isFeast = event.type === 'feast';

            let cardModifier = 'programme-card--standard';
            if (isWedding) cardModifier = 'programme-card--featured';
            if (isHaldi) cardModifier = 'programme-card--haldi';
            if (isFeast) cardModifier = 'programme-card--feast';

            return (
              <article
                key={event.id}
                className={`programme-card ${cardModifier} reveal-on-scroll`}
                aria-label={`${event.title} - ${event.time}`}
              >
                {isWedding && (
                  <div className="featured-ribbon" aria-hidden="true">
                    <span>मुख्य सोहळा</span>
                  </div>
                )}

                <div className="programme-card-icon-wrap" aria-hidden="true">
                  {isWedding ? (
                    <KalashIcon className="programme-icon" />
                  ) : (
                    <ClockIcon className="programme-icon" />
                  )}
                </div>

                <h3 className="programme-card-title">{event.title}</h3>

                <div className="programme-card-time-wrap">
                  {event.isoTime ? (
                    <time dateTime={event.isoTime} className="programme-card-time">
                      {event.time}
                    </time>
                  ) : (
                    <span className="programme-card-time">{event.time}</span>
                  )}
                </div>

                {event.description && (
                  <p className="programme-card-desc">{event.description}</p>
                )}

                <div className="programme-card-venue-tag">
                  <span className="venue-dot" aria-hidden="true" />
                  <span>विवाहस्थळी</span>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="programme-footer-notice">
          <p className="programme-notice-text">॥ {venueNotice} ॥</p>
        </footer>
      </div>
    </section>
  );
}
