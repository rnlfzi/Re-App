import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoryList from '../components/CategoryList';
import ThreadList from '../components/ThreadList';
import { asyncAllPopulate } from '../states/shared/action';
import { asyncToggleUpVoteThread, asyncToggleDownVoteThread, asyncToggleNeutralVoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncAllPopulate());
  }, [dispatch]);

  const onFiltered = (keyword) => {
    setCategory(keyword);
  };

  const onUpVote = (threadId) => {
    dispatch(asyncToggleUpVoteThread(threadId));
  };

  const ondownUpVote = (threadId) => {
    dispatch(asyncToggleDownVoteThread(threadId));
  };

  const onNeutralUpVote = (threadId) => {
    dispatch(asyncToggleNeutralVoteThread(threadId));
  };

  const threadFilter = threads.filter((thread) => {
    if (category === '') {
      return thread;
    }
    return thread.category === category;
  });

  const threadList = threadFilter.map((data) => ({
    ...data,
    user: users.find((user) => user.id === data.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <header className="home-page__header">
        <h1>Kategori Popular</h1>
        <CategoryList threads={threadList} onFiltered={onFiltered} />
      </header>
      <div className="home-page__content">
        <h2>Diskusi Tersedia</h2>
        <ThreadList
          onUpVote={onUpVote}
          onDownUpVote={ondownUpVote}
          onNeutralUpVote={onNeutralUpVote}
          threads={threadList}
        />
      </div>
    </section>
  );
}

export default HomePage;
