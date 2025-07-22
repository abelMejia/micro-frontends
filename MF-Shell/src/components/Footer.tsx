import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ padding: '1rem', background: '#222', color: '#fff', textAlign: 'center', marginTop: '2rem' }}>
    © {new Date().getFullYear()} App Host. Todos los derechos reservados.
  </footer>
);

export default Footer;
