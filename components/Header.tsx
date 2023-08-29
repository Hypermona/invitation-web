import React from "react";

import "./css/Header.css"

type Props = {};

const Header = (props: Props) => {
  return (  <div className="homepage-container">
  <header className="header">
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/signup">Signup</a>
        </li>
        <li className="nav-item">
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  </header>

</div>);
};

export default Header;
