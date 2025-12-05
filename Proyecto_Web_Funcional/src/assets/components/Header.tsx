import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button className="menu-icon">≡</button>
          <Link to="/" className="header-logo">
            <img src="/images/icons/logo-mercadona.png" alt="Mercadona" className="logo-img" />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

