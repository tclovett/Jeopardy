import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import App from '../components/App';

let getByTestId;

beforeEach(() => {
  ({ getByTestId } = render(<App />));
});

afterEach(cleanup);

describe('Main app component', () => {
  it('should be a class component', () => {
    expect(App.prototype.render).toBeTruthy();
  });

  it('should render a gameboard component', () => {
    expect(getByTestId('gameboard')).toBeVisible();
  });

  it('should render a scoreboard component', () => {
    expect(getByTestId('scoreboard')).toBeVisible();
  });

  it('should render a response component', () => {
    expect(getByTestId('response')).toBeVisible();
  });

  it('should decrease score when answer is wrong', () => {});

  it('should increase score when answer is correct', () => {});

  it('should flip back to the gameboard after a response is submitted', () => {});
});
