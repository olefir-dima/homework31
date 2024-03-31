import React, { useState } from "react";
import "./Menu.css";
import { addItemToBasket, getBasket } from "../../localStorageUtil";
import pizzaMarg from "../../img/pizzaMarg.jpg";
import pizzaGav from "../../img/pizzaGav.jpg";
import espresso from "../../img/espresso.png";
import latte from "../../img/latte.jpg";

function MenuItem({ name, sizes, prices, image }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToBasket = () => {
    const item = { name, size: selectedSize };
    addItemToBasket(item);
    alert(`Ви додали ${name} (${selectedSize}) до кошика!`);
  };

  return (
    <li>
      <div>
        <img src={image} alt={name} width="300" height="200" />
        <div>
          <h3>{name}</h3>
          <p>Ціна(грн): {prices[sizes.indexOf(selectedSize)]}</p>
          <div className="size-selector">
            {sizes.map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name={`size-${name}`}
                  value={size}
                  checked={selectedSize === size}
                  onChange={handleSizeChange}
                />
                {size}
              </label>
            ))}
          </div>
          <br />
        </div>
      </div>
      <button className="button" onClick={handleAddToBasket}>
        Додати в кошик
      </button>
    </li>
  );
}

function Menu() {
  const basket = getBasket();

  return (
    <div className="container">
      <h1>Меню</h1>
      <h2>Піца</h2>
      <ul>
        <MenuItem
          name="Пепероні"
          sizes={["мала", "велика"]}
          prices={["300", "350"]}
          image={pizzaMarg}
        />
        <MenuItem
          name="Гавайська"
          sizes={["мала", "велика"]}
          prices={["330", "360"]}
          image={pizzaGav}
        />
      </ul>

      <h2>Кава</h2>
      <ul>
        <MenuItem
          name="Еспресо"
          sizes={["мала", "середня", "велика"]}
          prices={["20", "25", "30"]}
          image={espresso}
        />
        <MenuItem
          name="Латте"
          sizes={["мала", "середня", "велика"]}
          prices={["25", "30", "35"]}
          image={latte}
        />
      </ul>
    </div>
  );
}

export default Menu;
