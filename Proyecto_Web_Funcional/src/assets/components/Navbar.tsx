import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar: React.FC = () => {
  const [openLang, setOpenLang] = useState(false);
  const langRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/conocenos" className="navbar-link">
            Conócenos
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/supermercados" className="navbar-link">
            Supermercados
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/trabaja" className="navbar-link">
            Trabaja con nosotros
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/atencion" className="navbar-link">
            Atención al cliente
          </NavLink>
        </li>

        <li className="navbar-item language-wrapper" ref={langRef}>
          <button
            className="lang-button-nav"
            onClick={() => setOpenLang(!openLang)}
          >
            Español ▾
          </button>

          {openLang && (
            <ul className="language-dropdown">
              <li>Español</li>
              <li>Valencià</li>
              <li>Català</li>
              <li>Galego</li>
              <li>Euskara</li>
              <li>English</li>
              <li>Deutsch</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
