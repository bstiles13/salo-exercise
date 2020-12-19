import React from 'react';
import { Filter } from './index';
import { shallow } from 'enzyme';

describe('Filter component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <Filter filter={{}} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
