import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div class="container">
      <h1>Меню</h1>
      <ul>
        <li>
          <h2>Піца</h2>
          <p>Смачна піца з різноманітними начинками</p>
        </li>
        <li>
          <h2>Паста</h2>
          <p>Ароматна паста з різноманітними соусами</p>
        </li>
        <li>
          <h2>Салати</h2>
          <p>Свіжі та смачні салати зі сезонних овочів</p>
        </li>
        <li>
          <h2>Капучино</h2>
          <p>Кава з молочною пінкою</p>
        </li>
        <li>
          <h2>Еспресо</h2>
          <p>Класичний короткий кавовий напій</p>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
