import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/calculator';
import '@testing-library/jest-dom';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Perform calculation operations', () => {
  test('Click a number and see on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('screen-output');
    userEvent.click(screen.getByText('1'));
    expect(result.innerHTML).toMatch('1');
  });
  test('Click two numbers and see on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('screen-output');
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('3'));
    expect(result.innerHTML).toMatch('23');
  });
  test('Click equals button to see result of operation on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('screen-output');
    userEvent.click(screen.getByText('8'));
    userEvent.click(screen.getByText('2'));
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));
    expect(result.innerHTML).toMatch('85');
  });
  test('Click modulus button to see remainder of two numbers on screen', () => {
    render(<Calculator />);
    const result = screen.getByTestId('screen-output');
    userEvent.click(screen.getByText('AC'));
    userEvent.click(screen.getByText('4'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('%'));
    userEvent.click(screen.getByText('2'));
    expect(result.innerHTML).toMatch('0');
  });
});
