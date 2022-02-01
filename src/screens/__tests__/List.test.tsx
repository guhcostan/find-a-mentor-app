import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { Home } from '../Home';

it('renders tappable items', () => {
  const push = jest.fn();
  // @ts-ignore
  // Ignoring next line because we don't need to pass all React Navigation related props down to the
  // screen for this test to work.
  const out = render(<Home navigation={{ push }} />);

  fireEvent.press(out.getByText('Text'));
  expect(push).toBeCalledWith('TextDemo');

  fireEvent.press(out.getByText('Form'));
  expect(push).toBeCalledWith('FormDemo');

  fireEvent.press(out.getByText('Button'));
  expect(push).toBeCalledWith('ButtonDemo');
});
