import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilter } from '../../store/filters';
import { FILTERS } from '../../constants';

import './style.scss';

export const Sidebar = ({ filter, setFilter }) => {
  const [showTags, setShowTags] = useState(true);

  const renderFilters = (type) => {
    return FILTERS.reduce((acc, item, i) => {
      if (item.type !== type) return acc;
      const { name, color, background } = item;
      const selected = filter?.name === name;

      acc.push(
        <div
          key={`filter-${i}`}
          className={`filter filter-${type}`}
          style={{ ...selected && { color: color, backgroundColor: background } }}
          id={name}
          onClick={() => setFilter(item)}>
          {name}
        </div>
      )
      return acc;
    }, [])
  };

  return (
    <div className='sidebar'>
      Compose
      <div className='filters'>
        {renderFilters('primary')}
        <div className={`filter filter-primary`} onClick={() => setShowTags(!showTags)}>Categories</div>
        {showTags && renderFilters('tag')}
      </div>
      {renderFilters()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter.filter
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setFilter
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
