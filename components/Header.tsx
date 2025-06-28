import React from 'react';

export default function Header() {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Web Indie Portfolio</h1>
      <p style={{ fontSize: '1rem', color: '#555' }}>Built with Next.js + Tailwind + TypeScript</p>
    </header>
  );
}
