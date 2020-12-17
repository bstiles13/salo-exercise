import React from 'react';
import { Sidebar } from './index';
import { shallow } from 'enzyme';

describe('Sidebar component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <Sidebar />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
