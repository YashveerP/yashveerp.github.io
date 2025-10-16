// src/sections/Hero.js
import React from 'react';
import { COLORS } from '../theme';

export default function Hello() {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      color: COLORS.background
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0 }}>Hello</h1>
      <p style={{ fontSize: '1.5rem' }}>I'm Yashveer. Welcome to my website.</p>
    </section>
  );
}
