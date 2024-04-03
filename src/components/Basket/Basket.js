import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBasket, removeItemFromBasket } from "../../localStorageUtil";
import "./Basket.css";

const Basket = () => {
  const [basket, setBasket] = useState({});
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadBasketData();
  }, []);

  const loadBasketData = () => {
    const basketData = getBasket();
    setBasket(basketData);
    setTotalItems(calculateTotalItems(basketData));
    setTotalPrice(calculateTotalPrice(basketData));
  };

  const calculateTotalItems = (basketData) => {
    return Object.values(basketData).reduce(
      (total, { quantity }) => total + quantity,
      0
    );
  };

  const calculateTotalPrice = (basketData) => {
    return Object.values(basketData).reduce(
      (total, { quantity, price }) => total + quantity * price,
      0
    );
  };

  const handleRemoveItem = (itemName, itemSize) => {
    removeItemFromBasket({ name: itemName, size: itemSize });
    const updatedBasket = { ...basket };
    delete updatedBasket[`${itemSize ? itemName + " " + itemSize : itemName}`];
    setBasket(updatedBasket);
    setTotalItems(calculateTotalItems(updatedBasket));
    setTotalPrice(calculateTotalPrice(updatedBasket));
  };

  return (
    <div className="container">
      <h1>Корзина</h1>
      {totalItems === 0 ? (
        <div>
          <p>Ще нічого не додано</p>
          <Link to="/menu" className="button-link">
            Хочу їсти
          </Link>
        </div>
      ) : (
        <>
          <ul>
            {Object.entries(basket).map(([itemKey, { quantity, price }]) => {
              const [itemName, itemSize] = itemKey.split(" ");
              return (
                <li key={itemKey}>
                  <p>
                    {itemKey} - {quantity} шт - {price} грн
                  </p>
                  <button onClick={() => handleRemoveItem(itemName, itemSize)}>
                    Видалити
                  </button>
                </li>
              );
            })}
          </ul>
          <p>Загальна кількість товарів: {totalItems}</p>
          <p>Загальна сума: {totalPrice} грн</p>
        </>
      )}
    </div>
  );
};

export default Basket;
