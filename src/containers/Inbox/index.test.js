import React from 'react';
import { Inbox } from './index';
import { shallow } from 'enzyme';

describe('Inbox component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <Inbox />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });
});
