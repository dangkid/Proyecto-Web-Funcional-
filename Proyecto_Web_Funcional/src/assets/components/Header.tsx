import React from "react";
import "./Header.css";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <button className="menu-icon">☰</button>

            <div className="header-logo">
              <img
                src="/images/icons/logo-mercadona.png"
                alt="Mercadona"
                className="logo-img"
              />
            </div>
          </div>

          <Navbar />
        </div>
      </header>

      <section className="hero">
        <div className="hero-image" />

        <div className="hero-content">
          <h1 className="hero-title">
            Empieza tu compra
            <br />
            en Mercadona
          </h1>

          <p className="hero-subtitle">
            Introduce tu código postal y, dependiendo de tu ciudad,
            accederás a la nueva compra online o a la web clásica.
          </p>

          <form className="hero-form">
            <input
              type="text"
              placeholder="Código postal"
              className="hero-input"
            />
            <button type="submit" className="hero-button">
              ENTRAR
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
