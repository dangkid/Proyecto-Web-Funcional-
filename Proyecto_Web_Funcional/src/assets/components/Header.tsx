import React from "react";
import "./Header.css";
import { Navbar } from "./Navbar";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <button className="menu-icon">≡</button>
          <div className="header-logo">
            <img src="/images/icons/logo-mercadona.png" alt="Mercadona" className="logo-img" />
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

