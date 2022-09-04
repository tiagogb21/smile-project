import React from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should render button', () => {
    render(<Button />)
    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  })
});
