import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar body_flex_horz">
      <h2>Allison French, Software Engineer</h2>
      <div className="navbar_links">
        <a href="https://github.com/alliefrench/">Github</a>
        <a href="https://www.linkedin.com/in/allison-french/">LinkedIn</a>
        <Link to="/projects">Projects</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
