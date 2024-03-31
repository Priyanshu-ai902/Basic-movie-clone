import React from 'react';

function Headeritem({ name, Icon }) {
  return (
    <div style={{
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      fontSize: '15px',
    }}>
      <Icon />
      <p>{name}</p>
    </div>
  );
}

export default Headeritem;