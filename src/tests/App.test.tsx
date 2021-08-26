import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeEach(() => { 
  return render(<App />)
 })

test('renders correct label start', () => {
  expect(screen.getByTestId(/start/i).textContent).toBe("Start");
});

test('renders correct label Reset', () => {
  expect(screen.getByTestId(/reset/i).textContent).toBe("Reset");
});

test('renders correct label Next Gen', () => {
  expect(screen.getByTestId(/nextgen/i).textContent).toBe("Next Generation");
});

test('check that grid row count matches', () => {
  expect(screen.getByTestId(/grid/i).childElementCount).toBe(20)
});

