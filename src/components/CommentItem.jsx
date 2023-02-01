import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import CommentItemFooter from './CommentItemFooter';
import CommentItemHeader, { ownerShape } from './CommentItemHeader';

function CommentItem({
  id, content, createdAt, downVotesBy, owner,
  upVotesBy, authUser, onUpVoteComment, onDownComment,
  onNeutralComment,
}) {
  return (
    <div className="comment-item">
      <CommentItemHeader
        {...owner}
        createdAt={createdAt}
      />
      <p className="comment-item__content">{parser(content)}</p>
      <CommentItemFooter
        commentId={id}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        authUser={authUser}
        onUpVoteComment={onUpVoteComment}
        onDownComment={onDownComment}
        onNeutralComment={onNeutralComment}
      />
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  authUser: PropTypes.string.isRequired,
  onUpVoteComment: PropTypes.func.isRequired,
  onDownComment: PropTypes.func.isRequired,
  onNeutralComment: PropTypes.func.isRequired,
};

export { commentShape };
export default CommentItem;
