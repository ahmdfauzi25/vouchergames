import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="brand">
          <span className="brand-logo">HG</span>
          <span className="brand-name">HiddenGame</span>
        </div>
        <div className="muted">© {new Date().getFullYear()} HiddenGame. All rights reserved.</div>
      </div>
    </footer>
  );
}


