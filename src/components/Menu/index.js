import React from 'react';
import Link from 'react-router-dom/Link';

import './Menu.css';

const Menu = (props) => {
  const { direction } = props;

  const style = {
    flexDirection: direction ? direction : 'row'
  };

  return (
    <div className="menu-wrap" style={style}>
      <Link to="/">Home</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
  );
};

export default Menu;
