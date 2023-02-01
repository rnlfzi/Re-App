import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardsShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards, id }) {
  return (
    <div className="leaderboard-list">
      <header className="leaderboard-list__label">
        <p>Pengguna</p>
        <p>Skor</p>
      </header>
      {
        leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} id={id} />
        ))
      }
    </div>
  );
}

LeaderboardList.propTypes = {
  id: PropTypes.string.isRequired,
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardsShape)).isRequired,
};

export default LeaderboardList;
