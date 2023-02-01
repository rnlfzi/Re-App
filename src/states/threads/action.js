import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UP_VOTE: 'TOGGLE_UP_VOTE',
  TOGGLE_DOWN_VOTE: 'TOGGLE_DOWN_VOTE',
  TOGGLE_NEUTRAL_VOTE: 'TOGGLE_NEUTRAL_VOTE',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread,
    },
  };
}

function toggleUpVoteThreadsActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_UP_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleDownVoteThreadsActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_DOWN_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function toggleNeutralVoteThreadsActionCreator({ threadId, userId }) {
  return {
    type: ActionType.TOGGLE_NEUTRAL_VOTE,
    payload: {
      threadId,
      userId,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncToggleUpVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleUpVoteThreadsActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleDownVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleDownVoteThreadsActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToggleNeutralVoteThread(threadId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser } = getState();
    dispatch(toggleNeutralVoteThreadsActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralVoteThread(threadId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  toggleUpVoteThreadsActionCreator,
  toggleDownVoteThreadsActionCreator,
  toggleNeutralVoteThreadsActionCreator,
  asyncAddThread,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralVoteThread,
};
