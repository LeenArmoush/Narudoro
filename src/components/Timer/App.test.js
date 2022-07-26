import { render, screen } from '@testing-library/react';
import Count from './Count';

test('renders learn react link', () => {
  render(<Count />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
