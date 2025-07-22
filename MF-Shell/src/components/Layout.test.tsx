import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import '@testing-library/jest-dom';

describe('Layout', () => {
  it('renders children correctly', () => {
    render(
      <Layout>
        <div>Contenido de prueba</div>
      </Layout>
    );
    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
  });
});
