import React from 'react';
import PropTypes from 'prop-types';

function ThreadDetailHeader({ title, category }) {
  return (
    <header className="thread-detail__header">
      <p className="thread-detail__category">
        #
        {' '}
        {category}
      </p>
      <div className="thread-detail-title">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

ThreadDetailHeader.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ThreadDetailHeader;
