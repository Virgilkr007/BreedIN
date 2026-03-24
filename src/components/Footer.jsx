import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">Breed<span>I</span>n</div>
      <p>© 2025 BreeDIn · A Millennium Fellowship Initiative · Nigeria</p>
      <div className="footer-links">
        <a href="#problem">Problem</a>
        <a href="#approach">Approach</a>
        <a href="#sectors">Sectors</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
