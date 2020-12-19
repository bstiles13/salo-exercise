import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../assets/logo.png';
import { setSearchTerm } from '../../store/filters';

import './style.scss';

export const Navbar = ({ setSearchTerm }) => {
  const [value, setValue] = useState('');

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.target.value);
    }
  }

  const onChange = ({ target: { value} }) => setValue(value);

  const onClear = () => {
    setValue('');
    setSearchTerm(null);
  }

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='logo' />
        <span>Gmail</span>
      </div>
      <div className='navbar-search'>
        <div className='navbar-search-input'>
          <input value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder='Search mail' />
          <i className='fas fa-times' onClick={onClear} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  searchTerm: state.filter.searchTerm
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSearchTerm
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
