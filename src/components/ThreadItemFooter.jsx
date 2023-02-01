import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
} from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';

function ThreadItemFooter({
  id, authUser, createdAt, upVotesBy, downVotesBy,
  totalComments, name, onUpVote, onDownUpVote, onNeutralUpVote,
}) {
  const isUpVote = upVotesBy.includes(authUser);
  const isDownVote = downVotesBy.includes(authUser);

  return (
    <footer className="thread-item__footer">
      { onUpVote && (
        <button
          type="button"
          className="thread-upvote__button"
          onClick={(() => {
            switch (isUpVote) {
              case false:
                return onUpVote(id);
              default:
                return onNeutralUpVote(id);
            }
          })}
        >
          { isUpVote
            ? <AiFillLike style={{ color: 'green' }} />
            : <AiOutlineLike /> }
          {' '}
          <span className="vote__label">{upVotesBy.length}</span>
        </button>
      )}
      { onDownUpVote && (
        <button
          type="button"
          className="thread-downvote__button"
          onClick={(() => {
            switch (isDownVote) {
              case false:
                return onDownUpVote(id);
              default:
                return onNeutralUpVote(id);
            }
          })}
        >
          { isDownVote
            ? <AiFillDislike style={{ color: 'red' }} />
            : <AiOutlineDislike /> }
          {' '}
          <span className="vote__label">{downVotesBy.length}</span>
        </button>
      )}
      <p className="thread-item__total-comments">
        <FaRegComment />
        {' '}
        <span className="vote__label">{totalComments}</span>
      </p>
      <p className="post-time">{createdAt}</p>
      <p className="thread-item__own">
        Dibuat oleh
        {' '}
        <strong>{name}</strong>
      </p>
    </footer>
  );
}

ThreadItemFooter.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownUpVote: PropTypes.func.isRequired,
  onNeutralUpVote: PropTypes.func.isRequired,
};

export default ThreadItemFooter;
