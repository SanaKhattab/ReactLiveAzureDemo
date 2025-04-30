import React from "react";
import "./Hitta.css";

class Hitta extends React.Component {
  render() {
    return (
      <main>
        <section className="about">
          <h2>Hitta till oss</h2>
          <div className="contact-info">
            <p>
              🍕 <strong>Adress:</strong> Storgatan 12
              <br />
              📍 <strong>Postnummer:</strong> 123 45 Pizzastad
              <br />⏰ <strong>Öppettider:</strong> 11:00 – 22:00
              <br />
              ☎️ <strong>Telefon:</strong> 0123-456 789
            </p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?..."
              title="Karta till pizzerian"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    );
  }
}

export default Hitta;
