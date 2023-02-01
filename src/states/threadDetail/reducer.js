import { ActionType } from './action';

const threadDetailReducer = (detailThread = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_COMMENT:
      return {
        ...detailThread,
        comments: [action.payload.comment, ...detailThread.comments],
      };
    case ActionType.TOGGLE_UP_VOTE_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.TOGGLE_DOWN_VOTE_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: detailThread.downVotesBy.concat([action.payload.userId]),
      };
    case ActionType.TOGGLE_NEUTRAL_VOTE_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.filter((id) => id !== action.payload.userId),
        downVotesBy: detailThread.downVotesBy.filter((id) => id !== action.payload.userId),
      };
    case ActionType.TOGGLE_UP_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.concat([action.payload.userId]),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_DOWN_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.concat([action.payload.userId]),
            };
          }
          return comment;
        }),
      };
    case ActionType.TOGGLE_NEUTRAL_VOTE_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter((id) => id !== action.payload.userId),
              downVotesBy: comment.downVotesBy.filter((id) => id !== action.payload.userId),
            };
          }
          return comment;
        }),
      };
    default:
      return detailThread;
  }
};

export default threadDetailReducer;
