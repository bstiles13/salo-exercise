import React from 'react';
import { Email } from './index';
import { shallow } from 'enzyme';

describe('Email component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <Email email={{}} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
