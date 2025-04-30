import React from "react";
import "./Pizza.css";

class Pizza extends React.Component {
  render() {
    return (
      <main>
        <section className="about">
          <h1 id="content-title">Våra Pizzor</h1>
          <table>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Detaljer</th>
                <th>Pris</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Margarita</td>
                <td>—</td>
                <td>_ kr</td>
              </tr>
              <tr>
                <td>Vesuvio</td>
                <td>Skinka</td>
                <td>_ kr</td>
              </tr>
              <tr>
                <td>Capricciosa</td>
                <td>Skinka, färska champinjoner</td>
                <td>_ kr</td>
              </tr>
              <tr>
                <td>Hawaii</td>
                <td>Skinka, ananas</td>
                <td>_ kr</td>
              </tr>
              <tr>
                <td>Bussola</td>
                <td>Skinka, handskalade räkor</td>
                <td>_ kr</td>
              </tr>
              <tr>
                <td>Pescatore</td>
                <td>Tonfisk, handskalade räkor</td>
                <td>_ kr</td>
              </tr>
              <tr>
                <td>Marinara</td>
                <td>Musslor, handskalade räkor</td>
                <td>_ kr</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    );
  }
}

export default Pizza;
