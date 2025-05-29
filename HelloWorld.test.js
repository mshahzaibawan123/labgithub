import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders Hello world heading', () => {
  render(<HelloWorld />);
  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});
