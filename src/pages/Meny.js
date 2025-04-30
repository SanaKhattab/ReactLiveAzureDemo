import React from "react";
import { Link } from "react-router-dom";
import "./Meny.css";

class Meny extends React.Component {
  render() {
    return (
      <main>
        <section className="about">
          <h2>Meny</h2>

          <div className="menu-section">
            <h3>
              <Link to="/pizza" className="pizza">
                Pizza
              </Link>
            </h3>
            <ul className="menu-list">
              <li>
                <span>Margarita</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Vesuvio (Skinka)</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Capricciosa</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Hawaii</span>
                <span>pris kr</span>
              </li>
            </ul>

            <h3>
              <Link to="/kebab" className="kebab">
                Kebab
              </Link>
            </h3>
            <ul className="menu-list">
              <li>
                <span>Pita Kebab</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Rullkebab</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Stark Kebabrulle</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Vitlöksrullkebab</span>
                <span>pris kr</span>
              </li>
            </ul>
          </div>

          <div className="menu-section">
            <h3>
              <Link to="/sallad" className="sallad">
                Sallad
              </Link>
            </h3>
            <ul className="menu-list">
              <li>
                <span>Kebabsallad</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Amerikansk Sallad</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Kycklingsallad</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Gyrosallad</span>
                <span>pris kr</span>
              </li>
            </ul>

            <h3>
              <Link to="/dryck" className="dryck">
                Dryck
              </Link>
            </h3>
            <ul className="menu-list">
              <li>
                <span>Dricka 33cl</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Dricka 50cl</span>
                <span>pris kr</span>
              </li>
              <li>
                <span>Dricka 2 liter</span>
                <span>pris kr</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }
}

export default Meny;
