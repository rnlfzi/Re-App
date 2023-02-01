import React from 'react';
import PropTypes from 'prop-types';
import { threadItemShape } from './ThreadItem';

function CategoryList({ threads, onFiltered }) {
  return (
    <div className="categories-list">
      <button
        type="button"
        className="category-item"
        onClick={() => onFiltered('')}
      >
        <p>
          All
        </p>
      </button>
      {
        threads.map((thread) => (
          <button
            key={thread.id}
            type="button"
            className="category-item"
            onClick={() => onFiltered(thread.category)}
          >
            <p>
              #
              {' '}
              {thread.category}
            </p>
          </button>
        ))
      }
    </div>
  );
}

CategoryList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  onFiltered: PropTypes.func.isRequired,
};

export default CategoryList;
