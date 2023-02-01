import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ThreadItemHeader({
  id, category, title, avatar,
}) {
  return (
    <header className="thread-item__header">
      <div className="thread-item__content">
        <img src={avatar} alt="" />
        <h3 className="thread-item__title">
          <Link to={`/threads/${id}`}>
            <strong>{title}</strong>
          </Link>
        </h3>
        <div>
          <span className="thread-item__category">
            #
            {' '}
            {category}
          </span>
        </div>
      </div>
    </header>
  );
}

ThreadItemHeader.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ThreadItemHeader;
