import React, { useState } from "react";
import './Contact.css';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
      <div className="contact-form">
        <div className="flex">
          <h1 className="textColor">
            ¡Comunicate con nosotros!
          </h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Número Telefónico:</label>
            <input
              type="tel"
              id="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Número Telefónico:"
            />
            <small>Formato: 123-456-7890</small>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
  );
}

export default ContactForm;