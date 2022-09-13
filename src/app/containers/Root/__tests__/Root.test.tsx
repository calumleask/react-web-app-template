import React from 'react';
import { render } from '@testing-library/react';
import { Root } from '../Root';

describe('Root', () => {
  it('renders without crashing', () => {
    render(<Root />);
  });
});
