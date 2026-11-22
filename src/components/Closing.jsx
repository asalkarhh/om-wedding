import React from 'react';
import { GaneshMotif, GoldDivider } from './Decorations';

export default function Closing({ data }) {
  const { blessing, signature } = data.closing;

  return (
    <footer className="closing-section reveal-on-scroll" id="closing">
      <div className="container">
        <div className="closing-card reveal-on-scroll">
          <div className="closing-ornament-top" aria-hidden="true">
            <GaneshMotif className="closing-ganesh-icon" />
          </div>

          <p className="closing-blessing">{blessing}</p>

          <GoldDivider className="closing-divider" />

          <p className="closing-signature">{signature}</p>

          <div className="closing-subtle-pattern" aria-hidden="true">
            <span>❖</span>
            <span className="dot">•</span>
            <span>❖</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
