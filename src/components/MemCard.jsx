// src/components/MemeCard.jsx
import React from 'react';

function MemCard({ title }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{title}</h1>
      <div style={{ width: '860px', height: '360px', backgroundColor: '#e0e0e0', marginBottom: '10px' }}>
        {/* Miejsce na obrazek mema */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button style={{ width: '430px', height: '40px' }}>Licznik up</button>
        <button style={{ width: '430px', height: '40px' }}>Licznik down</button>
      </div>
    </div>
  );
}

export default MemCard;
