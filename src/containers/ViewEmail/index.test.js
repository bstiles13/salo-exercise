import React from 'react';
import { ViewEmail } from './index';
import { shallow } from 'enzyme';

describe('ViewEmail component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <ViewEmail emails={[]} selectedEmail={{}} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
