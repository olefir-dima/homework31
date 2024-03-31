import React, { useState, useEffect } from "react";
import { getBasket, removeItemFromBasket } from "../../localStorageUtil";

function Basket() {
  const [basket, setBasket] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const basketData = getBasket();
    setBasket(basketData);
    setTotalItems(calculateTotalItems(basketData));
  }, []);

  const calculateTotalItems = (basketData) => {
    return Object.values(basketData).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const handleRemoveItem = (itemName) => {
    removeItemFromBasket(itemName);
    const updatedBasket = { ...basket };
    delete updatedBasket[itemName];
    setBasket(updatedBasket);
    setTotalItems(calculateTotalItems(updatedBasket));
  };

  return (
    <div className="container">
      <h1>Корзина</h1>
      {totalItems === 0 ? (
        <div>
          <p>Ще нічого не додано</p>
          <button onClick={() => (window.location.href = "/menu")}>
            Хочу їсти
          </button>
        </div>
      ) : (
        <>
          <ul>
            {Object.entries(basket).map(([itemName, quantity]) => (
              <li key={itemName}>
                <p>
                  {itemName} - {quantity}
                </p>
                <button onClick={() => handleRemoveItem(itemName)}>
                  Видалити
                </button>
              </li>
            ))}
          </ul>
          <p>Загальна кількість товарів: {totalItems}</p>
        </>
      )}
    </div>
  );
}

export default Basket;
