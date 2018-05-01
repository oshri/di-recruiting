import React from 'react';
import Link from 'react-router-dom/Link';

import './Menu.css';

function Menu(props) {
  const { direction } = props;

  const style = {
    flexDirection: direction ? direction : 'row'
  };

  return (
    <div className="menu-wrap" style={style}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/stories">Stories</Link>
      <Link to="/jobs">Jobs</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Menu;
