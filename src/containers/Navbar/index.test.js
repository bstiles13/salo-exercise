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

  it('should handle input change', () => {
    wrapper.find('input').simulate('change', { target: { value: 'test' }});
    expect(wrapper.find('input').prop('value')).toEqual('test');
  });

  it('should handle setSearchTerm', () => {
    const setSearchTerm = jest.fn();
    wrapper.setProps({ setSearchTerm });

    wrapper.find('input').simulate('keydown', {key: 'Enter', target: { value: 'test' }});
    expect(setSearchTerm).toHaveBeenCalledWith('test');
  });
});
