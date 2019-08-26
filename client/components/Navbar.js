import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar body_flex_horz">
      <div className="logo">Allison French | Software Engineer</div>
      <div className="navbar_links">
        <Link to="/">Home</Link>
        <a href="https://github.com/alliefrench/">Github</a>
        <a href="https://www.linkedin.com/in/allison-french/">LinkedIn</a>
        <Link to="/projects">Projects</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
