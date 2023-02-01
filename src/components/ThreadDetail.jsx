import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import ThreadDetailFooter from './ThreadDetailFooter';
import ThreadDetailHeader from './ThreadDetailHeader';
import CommentInput from './CommentInput';
import CommentItem, { commentShape } from './CommentItem';

function ThreadDetail({
  id, title, body, category,
  createdAt, owner, upVotesBy,
  downVotesBy, comments, addComment,
  onUpVoteDetail, onDownVoteDetail,
  onNeutralUpVoteDetail, authUser,
  onUpVoteComment, onDownComment, onNeutralComment,
}) {
  return (
    <div className="thread-detail">
      <ThreadDetailHeader title={title} category={category} />
      <div className="thread-detail__body">
        { parser(body) }
      </div>
      <ThreadDetailFooter
        id={id}
        createdAt={createdAt}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        onUpVoteDetail={onUpVoteDetail}
        onDownVoteDetail={onDownVoteDetail}
        onNeutralUpVoteDetail={onNeutralUpVoteDetail}
        {...owner}
        authUser={authUser}
      />
      <div className="thread-comment">
        <CommentInput addComment={addComment} />
        {
          comments.map((comment) => (
            <CommentItem
              key={comment.id}
              {...comment}
              authUser={authUser}
              onUpVoteComment={onUpVoteComment}
              onDownComment={onDownComment}
              onNeutralComment={onNeutralComment}
            />
          ))
        }
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const detailThread = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
};

ThreadDetail.propTypes = {
  ...detailThread,
  addComment: PropTypes.func.isRequired,
  onUpVoteDetail: PropTypes.func.isRequired,
  onDownVoteDetail: PropTypes.func.isRequired,
  onNeutralUpVoteDetail: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
  onUpVoteComment: PropTypes.func.isRequired,
  onDownComment: PropTypes.func.isRequired,
  onNeutralComment: PropTypes.func.isRequired,
};

export default ThreadDetail;
