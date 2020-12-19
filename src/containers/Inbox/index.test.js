import React from 'react';
import { Inbox } from './index';
import { shallow } from 'enzyme';

describe('Inbox component', () => {
  let wrapper;

  beforeEach(() => {
    jest.restoreAllMocks();
    wrapper = shallow(
      <Inbox emails={[]} filter={{}} selectedEmail={{}} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render rows', () => {
    wrapper.setProps({ emails: [{ id: '1' }, { id: '2' }, { id: '3' }]});
    expect(wrapper.find('Email').length).toEqual(3);
  });
});
