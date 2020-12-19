import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSidebarFilter } from '../../store/filters';
import { setSelectedEmail } from '../../store/emails';
import { FILTERS } from '../../constants';
import { Filter } from '../../components/Filter';

import './style.scss';

export const Sidebar = ({ filter, setSidebarFilter, setSelectedEmail, history }) => {
  const [showTags, setShowTags] = useState(true);

  const selectFilter = (filter) => {
    setSelectedEmail({});
    setSidebarFilter(filter);
    history.push('/inbox');
  }

  const renderFilters = (type) => {
    return FILTERS.reduce((acc, item, i) => {
      if (item.type !== type) return acc;
      const selected = filter?.name === item.name;

      acc.push(<Filter key={`filter-${i}`} filter={item} selected={!!selected} selectFilter={selectFilter} />);

      return acc;
    }, [])
  };

  return (
    <div className='sidebar'>
      <div className='filters'>
        {renderFilters('primary')}
        <div className={`filter filter-primary`} onClick={() => setShowTags(!showTags)}>
          <i className={`fas fa-${showTags ? 'caret-down' : 'caret-right' }`} />
          Categories
        </div>
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
  setSidebarFilter,
  setSelectedEmail
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));
