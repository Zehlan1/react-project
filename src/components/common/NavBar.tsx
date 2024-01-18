import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="d-flex">
          <Link to="/posts" className="navbar-brand">Social Media</Link>
          <div className="navbar-nav">
            <Link to="/posts" className="nav-link">Posts</Link>
            <Link to="/albums" className="nav-link">Albums</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
