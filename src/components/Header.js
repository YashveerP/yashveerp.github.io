// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../theme';

export default function Header() {
  const linkStyle = {
    marginLeft: '1rem',
    textDecoration: 'none',
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: '1rem'
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      right: 0,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'flex-end',
        alignItems: 'center',
      backgroundColor: COLORS.background,
      width: '100%',
      boxShadow: COLORS.shadow,
      zIndex: 1000
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: COLORS.text, padding: '0 3rem'
       }}>Yashveer Paul</div>
      <div style={{ flex: 1 }} />
      <div>
        <a href="https://github.com/YashveerP" style={linkStyle} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} /> GitHub</a>
        <a href="https://linkedin.com/in/yashveerpaul" style={linkStyle} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
        <a href="mailto:yashveer@uw.edu" style={linkStyle}>
          <FontAwesomeIcon icon={faEnvelope} /> Email</a>
      </div>
    </header>
  );
}
