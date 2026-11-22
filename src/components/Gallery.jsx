import React from 'react';
import { GoldDivider } from './Decorations';

export default function Gallery({ data }) {
  const { heading, photos } = data.gallery;

  return (
    <section className="section gallery-section reveal-on-scroll" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <header className="section-header reveal-on-scroll">
          <span className="section-subtitle">गोड आठवणी</span>
          <h2 id="gallery-heading" className="section-title">
            {heading}
          </h2>
          <GoldDivider />
        </header>

        <div className="gallery-layout">
          {photos.map((item, index) => {
            const isDeepmala = item.isTallFeature;
            return (
              <figure
                key={item.id}
                className={`gallery-item ${isDeepmala ? 'gallery-item--deepmala' : ''} reveal-on-scroll`}
              >
                <div className="gallery-image-frame">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                    className={`gallery-img ${isDeepmala ? 'gallery-img--deepmala' : ''}`}
                  />
                  <div className="gallery-gold-border" aria-hidden="true" />
                </div>
                <figcaption className="photo-caption gallery-caption">
                  {item.caption}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
