import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { postedAt } from '../utils';
import ThreadItemFooter from './ThreadItemFooter';
import ThreadItemHeader from './ThreadItemHeader';

function ThreadItem({
  id, title, body, category, createdAt, upVotesBy, downVotesBy,
  totalComments, user, onUpVote, onDownUpVote, authUser, onNeutralUpVote,
}) {
  return (
    <div className="thread-item">
      <ThreadItemHeader id={id} title={title} category={category} avatar={user.avatar} />
      <div className="thread-item__body">
        {parser(body.slice(0, 300) + (body.length > 300
          ? '...'
          : ''
        ))}
      </div>
      <ThreadItemFooter
        id={id}
        authUser={authUser}
        upVotesBy={upVotesBy}
        downVotesBy={downVotesBy}
        createdAt={postedAt(createdAt)}
        totalComments={totalComments}
        name={user.name}
        onUpVote={onUpVote}
        onDownUpVote={onDownUpVote}
        onNeutralUpVote={onNeutralUpVote}
      />
    </div>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  onUpVote: PropTypes.func.isRequired,
  onDownUpVote: PropTypes.func.isRequired,
  onNeutralUpVote: PropTypes.func.isRequired,
};

export { threadItemShape, userShape };
export default ThreadItem;
