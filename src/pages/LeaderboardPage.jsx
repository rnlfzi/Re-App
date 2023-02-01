import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncAllLeaderboards } from '../states/shared/action';

function LeaderboardPage() {
  const {
    leaderboards = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncAllLeaderboards());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((data) => ({
    ...data,
  }));

  return (
    <section className="leaderboard-page">
      <h2>Klasemen Pengguna Aktif</h2>
      <LeaderboardList leaderboards={leaderboardList} {...authUser} />
    </section>
  );
}

export default LeaderboardPage;
