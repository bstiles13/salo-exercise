import React from 'react';
import { PlaceholderText } from './index';
import { shallow } from 'enzyme';

describe('PlaceholderText component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <PlaceholderText />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
