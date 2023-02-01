import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_DETAIL: 'TOGGLE_UP_VOTE_DETAIL',
  TOGGLE_DOWN_VOTE_DETAIL: 'TOGGLE_DOWN_VOTE_DETAIL',
  TOGGLE_NEUTRAL_VOTE_DETAIL: 'TOGGLE_NEUTRAL_VOTE_DETAIL',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NEUTRAL_VOTE_COMMENT: 'TOGGLE_NEUTRAL_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function toggleUpVoteDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleDownVoteDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_DETAIL,
    payload: {
      userId,
    },
  };
}

function toggleNeutralVoteDetailActionCreator(userId) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_DETAIL,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function toggleUpVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleDownVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function toggleNeutralVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
      const detailThread = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteDetailActionCreator() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, detailThread } = getState();
    dispatch(toggleUpVoteDetailActionCreator(authUser.id));

    try {
      await api.upVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteDetailActionCreator() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, detailThread } = getState();
    dispatch(toggleDownVoteDetailActionCreator(authUser.id));

    try {
      await api.downVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleNeutralVoteDetailActionCreator() {
  return async (dispatch, getState) => {
    dispatch(hideLoading());
    const { authUser, detailThread } = getState();
    dispatch(toggleNeutralVoteDetailActionCreator(authUser.id));

    try {
      await api.neutralVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteCommentActionCreator(commentId) {
  return async (dispatch, getState) => {
    dispatch(hideLoading());
    const { authUser, detailThread } = getState();
    dispatch(toggleUpVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.upVoteComment({ threadId: detailThread.id, commentId });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteCommentActionCreator(commentId) {
  return async (dispatch, getState) => {
    dispatch(hideLoading());
    const { authUser, detailThread } = getState();
    dispatch(toggleDownVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.downVoteComment({ threadId: detailThread.id, commentId });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleNeutralVoteCommentActionCreator(commentId) {
  return async (dispatch, getState) => {
    dispatch(hideLoading());
    const { authUser, detailThread } = getState();
    dispatch(toggleNeutralVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.neutralVoteComment({ threadId: detailThread.id, commentId });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  toggleUpVoteDetailActionCreator,
  toggleDownVoteDetailActionCreator,
  toggleNeutralVoteDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncToggleUpVoteDetailActionCreator,
  asyncToggleDownVoteDetailActionCreator,
  asyncToggleNeutralVoteDetailActionCreator,
  asyncToggleUpVoteCommentActionCreator,
  asyncToggleDownVoteCommentActionCreator,
  asyncToggleNeutralVoteCommentActionCreator,
};
