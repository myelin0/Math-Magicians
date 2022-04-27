import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import '@testing-library/jest-dom';

describe('App', () => {
  test('renders App component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    screen.queryByText('Math Magicians');
    expect(screen.queryByText('Math Magicians')).toBeInTheDocument();
    expect(screen.queryByText('William Paul Thurston')).toBeNull();
    expect(screen.queryByText("Let's do some math!")).toBeNull();
  });
});

test('test hyperlink click', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  fireEvent.click(screen.getByText('Calculator'));

  expect(screen.getByText('Calculator')).toMatchInlineSnapshot(`
<a
  href="/Calculator"
>
  Calculator 
</a>
`);
});
