import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));

    navigate('/');
  };
  return (
    <section className="add-page">
      <div className="add-page__content">
        <h1>Create A New Discussion</h1>
        <ThreadInput addThread={onAddThread} />
      </div>
    </section>
  );
}

export default AddThreadPage;
