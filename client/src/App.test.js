import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const logo = screen.getByText(/bookface/i);
  expect(logo).toBeInTheDocument();
});
