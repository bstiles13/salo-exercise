import React from 'react';
import { Navbar } from './index';
import { shallow } from 'enzyme';

describe('Navbar component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <Navbar />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
