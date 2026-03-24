import React from 'react';
import { LogoIcon } from './Logo';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">
        <LogoIcon width={36} height={46} />
        <span className="nav-brand">Breed<span>I</span>n</span>
      </a>
      <ul className="nav-links">
        <li><a href="#problem">The Problem</a></li>
        <li><a href="#approach">Approach</a></li>
        <li><a href="#sectors">Sectors</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" className="nav-cta">Partner With Us</a></li>
      </ul>
    </nav>
  );
}
