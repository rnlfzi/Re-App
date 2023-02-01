import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function CommentItemHeader({ avatar, name, createdAt }) {
  return (
    <header className="comment-item__header">
      <div className="comment-item__own-info">
        <img src={avatar} alt={name} />
        <div>
          <span>{name}</span>
          <p className="post-time">{postedAt(createdAt)}</p>
        </div>
      </div>
    </header>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

CommentItemHeader.propTypes = {
  ...ownerShape,
  createdAt: PropTypes.string.isRequired,
};

export { ownerShape };

export default CommentItemHeader;
