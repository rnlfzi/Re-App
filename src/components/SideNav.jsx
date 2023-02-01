import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';
import { MdLeaderboard, MdAddComment } from 'react-icons/md';
import { RiLogoutCircleRFill } from 'react-icons/ri';

function SideNav({ authUser, logout }) {
  const { name, avatar } = authUser;

  return (
    <div className="side-nav">
      <img src={avatar} alt="avatar" />
      <p>
        Welcome,
        {' '}
        <strong>{name}</strong>
      </p>
      <nav>
        <Link to="/">
          <HiHome />
          {' '}
          Home
        </Link>
        <Link to="/leaderboards">
          <MdLeaderboard />
          {' '}
          Leaderboard
        </Link>
        <Link to="/add">
          <MdAddComment />
          {' '}
          Add New Thread
        </Link>
      </nav>
      <button type="button" onClick={logout}>
        <RiLogoutCircleRFill />
        {' '}
        Keluar
      </button>
    </div>
  );
}

const authUserShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

SideNav.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  logout: PropTypes.func.isRequired,
};

export default SideNav;
