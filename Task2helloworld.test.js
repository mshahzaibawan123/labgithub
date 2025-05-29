import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // for toHaveTextContent
import HelloWorld from './HelloWorld';

test('renders Hello world heading with correct text', () => {
  const { getByRole } = render(<HelloWorld />);
  const heading = getByRole('heading');
  expect(heading).toHaveTextContent('Hello world');
});
