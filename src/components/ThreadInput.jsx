import React from 'react';
import PropTypes from 'prop-types';
import { IoSend } from 'react-icons/io5';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <div className="thread-input">
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={onCategoryChange}
      />
      <textarea
        type="text"
        placeholder="Apa yang ingin kamu diskusikan..."
        value={body}
        onChange={onBodyChange}
      />
      <button
        type="submit"
        onClick={() => addThread({ title, category, body })}
      >
        <IoSend />
        {'  '}
        Kirim
      </button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
