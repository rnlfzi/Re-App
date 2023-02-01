import React from 'react';
import PropTypes from 'prop-types';
import {
  AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike,
} from 'react-icons/ai';

function CommentItemFooter({
  commentId, upVotesBy, downVotesBy, authUser,
  onUpVoteComment, onDownComment, onNeutralComment,
}) {
  const isUpVote = upVotesBy.includes(authUser);
  const isDownVote = downVotesBy.includes(authUser);

  return (
    <footer className="comment-item__footer">
      { onUpVoteComment && (
        <button
          type="button"
          className="thread-upvote__button"
          onClick={(() => {
            switch (isUpVote) {
              case false:
                return onUpVoteComment(commentId);
              default:
                return onNeutralComment(commentId);
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
      { onDownComment && (
        <button
          type="button"
          className="thread-downvote__button"
          onClick={(() => {
            switch (isDownVote) {
              case false:
                return onDownComment(commentId);
              default:
                return onNeutralComment(commentId);
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
    </footer>
  );
}

CommentItemFooter.propTypes = {
  commentId: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  onUpVoteComment: PropTypes.func.isRequired,
  onDownComment: PropTypes.func.isRequired,
  onNeutralComment: PropTypes.func.isRequired,
};

export default CommentItemFooter;
