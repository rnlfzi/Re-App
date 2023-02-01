import React from 'react';
import PropTypes from 'prop-types';
import { IoSend } from 'react-icons/io5';
import useInput from '../hooks/useInput';

function CommentInput({ addComment }) {
  const [content, onContentChange] = useInput('');

  return (
    <div className="thread-comment__input">
      <h3>Beri Komentar</h3>
      <form className="comment-input">
        <textarea
          className="comment-input__field"
          type="text"
          placeholder="Komentar"
          value={content}
          onChange={onContentChange}
        />
        <button
          type="button"
          onClick={() => addComment({ content })}
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
