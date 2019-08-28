import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar body_flex_horz">
      <div className="logo">Allison French | Software Engineer</div>
      <div className="navbar_links">
        <Link to="/">HOME</Link>
        <a href="https://github.com/alliefrench/">GITHUB</a>
        <a href="https://www.linkedin.com/in/allison-french/">LINKEDIN</a>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/posts">POSTS</Link>
      </div>
    </div>
  );
};

export default Navbar;
