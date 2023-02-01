import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score, id }) {
  return (
    <div className="leaderboard-item">
      <div className="leaderboard-item__info">
        <img src={user.avatar} alt={user.name} />
        <p>
          {user.name}
          {' '}
          {
            (user.id === id ? '( Anda )' : '')
          }
        </p>
      </div>
      <p className="leaderboard-item__score">{score}</p>
    </div>
  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const leaderboardsShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  id: PropTypes.string.isRequired,
  ...leaderboardsShape,
};

export { leaderboardsShape };

export default LeaderboardItem;
