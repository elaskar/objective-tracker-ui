import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header', () => {
  render(<Header />);
  const title = screen.getByText(/objective tracker/i);
  expect(title).toBeInTheDocument();
});
