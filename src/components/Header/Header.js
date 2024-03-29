import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <div class="menu-item">
          <Link to="/">Головна</Link>
        </div>
        <div class="menu-item">
          <Link to="/menu">Меню</Link>
        </div>
        <div class="menu-item">
          <Link to="/about">Про нас</Link>
        </div>
        <div class="menu-item">
          <Link to="/basket">Корзина</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
