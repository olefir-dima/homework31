import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Menu.css";
import { addItemToBasket, getBasket } from "../../localStorageUtil";
import pizzaImg from "../../img/pizzaImg.jpg";
import coffeeImg from "../../img/coffeeImg.png";
import { selectPizzaItems, selectCoffeeItems } from "../../store";

function MenuItem({ name, sizes, prices, available, image }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToBasket = () => {
    const item = {
      name,
      size: selectedSize,
      price: prices[sizes.indexOf(selectedSize)],
    };
    addItemToBasket(item);
    alert(`Ви додали ${name} (${selectedSize}) до кошика!`);
  };

  return (
    <li>
      <div className={available ? "" : "opacity"}>
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
      <button
        className="button"
        onClick={handleAddToBasket}
        disabled={!available}
      >
        Додати в кошик
      </button>
    </li>
  );
}

function Menu() {
  const pizzaItems = useSelector(selectPizzaItems);
  const coffeeItems = useSelector(selectCoffeeItems);

  return (
    <div className="container">
      <h1>Меню</h1>
      <h2>Піца</h2>
      <ul>
        {pizzaItems.map((pizzaItem) => (
          <MenuItem
            key={pizzaItem.name}
            name={pizzaItem.name}
            sizes={pizzaItem.sizes}
            prices={pizzaItem.prices}
            available={pizzaItem.available}
            image={pizzaImg} // need update
          />
        ))}
      </ul>

      <h2>Кава</h2>
      <ul>
        {coffeeItems.map((coffeeItem) => (
          <MenuItem
            key={coffeeItem.name}
            name={coffeeItem.name}
            sizes={coffeeItem.sizes}
            prices={coffeeItem.prices}
            available={coffeeItem.available}
            image={coffeeImg} // need update
          />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
