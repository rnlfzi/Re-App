import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadList({
  threads, onUpVote, onDownUpVote, onNeutralUpVote,
}) {
  return (
    <div className="thread-list">
      {
        threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            onUpVote={onUpVote}
            onDownUpVote={onDownUpVote}
            onNeutralUpVote={onNeutralUpVote}
          />
        ))
      }
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownUpVote: PropTypes.func.isRequired,
  onNeutralUpVote: PropTypes.func.isRequired,
};

export default ThreadList;
