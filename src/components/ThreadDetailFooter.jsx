import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
} from 'react-icons/ai';
import { postedAt } from '../utils';

function ThreadDetailFooter({
  id, createdAt, name, avatar, upVotesBy, downVotesBy,
  onUpVoteDetail, onDownVoteDetail, authUser, onNeutralUpVoteDetail,
}) {
  const isUpVote = upVotesBy.includes(authUser);
  const isDownVote = downVotesBy.includes(authUser);

  return (
    <footer className="thread-detail__footer">
      <button
        type="button"
        className="thread-upvote__button"
        onClick={(() => {
          switch (isUpVote) {
            case false:
              return onUpVoteDetail(id);
            default:
              return onNeutralUpVoteDetail(id);
          }
        })}
      >
        { isUpVote
          ? <AiFillLike style={{ color: 'green' }} />
          : <AiOutlineLike /> }
        {' '}
        <span className="vote__label">{upVotesBy.length}</span>
      </button>
      <button
        type="button"
        className="thread-downvote__button"
        onClick={(() => {
          switch (isDownVote) {
            case false:
              return onDownVoteDetail(id);
            default:
              return onNeutralUpVoteDetail(id);
          }
        })}
      >
        { isDownVote
          ? <AiFillDislike style={{ color: 'red' }} />
          : <AiOutlineDislike /> }
        {' '}
        <span className="vote__label">{downVotesBy.length}</span>
      </button>
      <p className="own-info">
        Dibuat oleh
        <img src={avatar} alt="avatar" />
        <span>{name}</span>
      </p>
      <p className="post-time">{postedAt(createdAt)}</p>
    </footer>
  );
}

ThreadDetailFooter.propTypes = {
  id: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onUpVoteDetail: PropTypes.func.isRequired,
  onDownVoteDetail: PropTypes.func.isRequired,
  onNeutralUpVoteDetail: PropTypes.func.isRequired,
};

export default ThreadDetailFooter;
