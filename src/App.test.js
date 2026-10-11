import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const ventures = [
  'Inframarkets',
  'Tide',
  'Kash',
  'Eagle AI',
  'Polaris Finance',
  'Texochat',
];

test('renders the venture list as native buttons', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /6 ventures/i })).toBeInTheDocument();

  const ventureButtons = screen.getAllByRole('button');
  expect(ventureButtons).toHaveLength(ventures.length);

  ventures.forEach((venture) => {
    const card = screen.getByRole('button', { name: new RegExp(venture, 'i') });
    expect(within(card).getByRole('heading', { name: venture })).toBeInTheDocument();
    expect(card).toHaveTextContent(/deep dive/i);
  });
});

test('opens a venture with keyboard activation and navigates back', async () => {
  render(<App />);

  await userEvent.tab();
  expect(screen.getByRole('button', { name: /Inframarkets/i })).toHaveFocus();

  await userEvent.keyboard('{Enter}');
  expect(screen.getByRole('button', { name: /all ventures/i })).toBeInTheDocument();
  expect(screen.getByText(/trading platform for energy prices/i)).toBeInTheDocument();

  screen.getByRole('button', { name: /all ventures/i }).focus();
  await userEvent.keyboard('{Enter}');

  expect(screen.getByRole('heading', { name: /6 ventures/i })).toBeInTheDocument();
  ventures.forEach((venture) => {
    expect(screen.getByRole('button', { name: new RegExp(venture, 'i') })).toBeInTheDocument();
  });
});
