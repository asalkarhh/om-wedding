import React, { useState, useEffect, useRef } from 'react';

export default function AudioPlayer({ data }) {
  const { src, title, playLabel, pauseLabel, promptText } = data.music;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.75; // Pleasant listening volume

    // Attempt direct autoplay on load
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          // Browser autoplay restriction in effect (requires user gesture)
          setIsPlaying(false);

          const startAudioOnFirstTouch = () => {
            if (audio.paused) {
              audio
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setHasInteracted(true);
                })
                .catch(() => {});
            }
            removeTouchListeners();
          };

          const events = ['click', 'touchstart', 'scroll', 'keydown'];
          const removeTouchListeners = () => {
            events.forEach((evt) => {
              window.removeEventListener(evt, startAudioOnFirstTouch);
            });
          };

          events.forEach((evt) => {
            window.addEventListener(evt, startAudioOnFirstTouch, { once: true, passive: true });
          });

          return removeTouchListeners;
        });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {});
    }
  };

  return (
    <div className="audio-player-widget">
      <audio
        ref={audioRef}
        src={src}
        loop
        preload="auto"
        aria-hidden="true"
      />

      <button
        type="button"
        onClick={togglePlay}
        className={`audio-toggle-btn ${isPlaying ? 'is-playing' : 'is-paused'} ${!hasInteracted ? 'needs-interaction' : ''}`}
        aria-label={isPlaying ? `${pauseLabel} - ${title}` : `${playLabel} - ${title}`}
        title={isPlaying ? pauseLabel : playLabel}
      >
        <div className="audio-icon-wrap" aria-hidden="true">
          {isPlaying ? (
            <div className="audio-equalizer">
              <span className="eq-bar eq-bar--1" />
              <span className="eq-bar eq-bar--2" />
              <span className="eq-bar eq-bar--3" />
            </div>
          ) : (
            <svg
              className="audio-svg-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
              <line x1="1" y1="1" x2="23" y2="23" strokeWidth="2.5" />
            </svg>
          )}
        </div>

        <span className="audio-text-pill">
          {isPlaying ? 'संगीत चालू' : 'संगीत ऐका'}
        </span>
      </button>
    </div>
  );
}
