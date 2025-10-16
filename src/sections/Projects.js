// src/sections/Projects.js
import React from 'react';
import { COLORS } from '../theme';
import swipeFightImg from '../images/SwipeFight.png';
import campusNavigatorImg from '../images/CampusNav.png';
import recipeMasterImg from '../images/RecipeMaster.png';

const projects = [
  {
    title: 'SwipeFight',
    image: swipeFightImg,
    link: 'https://github.com/aidenkatsura/SwipeFight',
  },
  {
    title: 'Campus Navigator',
    image: campusNavigatorImg,
    link: 'https://google.com',
  },
  {
    title: 'RecipeMaster',
    image: recipeMasterImg,
    link: 'https://github.com/HP729/RecipeMaster',
  },
];

export default function Projects() {
  return (
    <section style={{
      padding: '4rem 2rem',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.background
        }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: COLORS.text,
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: COLORS.shadow,
              transition: 'transform 0.2s',
            }}
          >
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: '0.3s',
            }}>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1rem' }}>
                <h3 style={{ fontSize: '1.2rem' }}>{project.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
