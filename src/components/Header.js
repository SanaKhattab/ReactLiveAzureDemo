import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header class="header">
        <img src="img/logo.png" alt="Svalans Pizzeria Logo" class="logo" />

        <input type="checkbox" id="side-menu" class="side-menu" />
        <label for="side-menu" class="hamb">
          <span class="hamb-line"></span>
        </label>

        <nav class="topnav">
          <ul>
            <li>
              <a href="/Home">Hem</a>
            </li>
            <li>
              <a href="/Meny">Meny</a>
            </li>
            <li>
              <a href="/Hitta">Hitta oss</a>
            </li>
            <li>
              <a href="/Kontakta">Kontakta oss</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
