import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemList from './ItemList';

test('checks if "Banana" is in the list', () => {
  render(<ItemList />);
  const bananaItem = screen.getByText('Banana');
  expect(bananaItem).toBeInTheDocument();
});

