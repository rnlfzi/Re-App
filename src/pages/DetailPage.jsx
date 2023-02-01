import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadDetail from '../components/ThreadDetail';
import {
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleUpVoteDetailActionCreator,
  asyncToggleDownVoteDetailActionCreator,
  asyncToggleNeutralVoteDetailActionCreator,
  asyncToggleUpVoteCommentActionCreator,
  asyncToggleDownVoteCommentActionCreator,
  asyncToggleNeutralVoteCommentActionCreator,
} from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const {
    detailThread = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ threadId: id, content }));
  };

  const onUpVoteDetail = () => {
    dispatch(asyncToggleUpVoteDetailActionCreator());
  };

  const ondownUpVoteDetail = () => {
    dispatch(asyncToggleDownVoteDetailActionCreator());
  };

  const onNeutralUpVoteDetail = () => {
    dispatch(asyncToggleNeutralVoteDetailActionCreator());
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncToggleUpVoteCommentActionCreator(commentId));
  };

  const onDownComment = (commentId) => {
    dispatch(asyncToggleDownVoteCommentActionCreator(commentId));
  };

  const onNeutralComment = (commentId) => {
    dispatch(asyncToggleNeutralVoteCommentActionCreator(commentId));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <section className="detail-page">
      <ThreadDetail
        {...detailThread}
        authUser={authUser.id}
        addComment={onAddComment}
        onUpVoteDetail={onUpVoteDetail}
        onDownVoteDetail={ondownUpVoteDetail}
        onNeutralUpVoteDetail={onNeutralUpVoteDetail}
        onUpVoteComment={onUpVoteComment}
        onDownComment={onDownComment}
        onNeutralComment={onNeutralComment}
      />
    </section>
  );
}

export default DetailPage;
