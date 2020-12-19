import React from 'react';

import './style.scss';

export const Filter = ({ filter, selected, selectFilter }) => {
  const { type, name, color, background, icon } = filter;

  return (
    <div
      id={name}
      className={`filter filter-${type} ${selected ? 'selected' : ''}`}
      style={{ ...selected && { color: color, backgroundColor: background } }}
      onClick={() => selectFilter(filter)}>
      <i className={icon} />
      {name}
    </div>
  );
}

