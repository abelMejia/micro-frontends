import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterWrapper from './CharacterWrapper';

jest.mock('../hooks/useFetch', () => jest.fn());
import useFetch from '../hooks/useFetch';

describe('CharacterWrapper', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading state', () => {
    (useFetch as jest.Mock).mockReturnValue({ loading: true, data: null, error: null });
    render(<CharacterWrapper />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it('shows error state', () => {
    (useFetch as jest.Mock).mockReturnValue({ loading: false, data: null, error: true });
    render(<CharacterWrapper />);
  });

});
