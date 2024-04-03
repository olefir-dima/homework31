import React from "react";
import "./Description.css";
import { useSelector } from "react-redux";
import { selectPromoItems } from "../../store";
import { addItemToBasket } from "../../localStorageUtil";

function Description() {
  const promoItems = useSelector(selectPromoItems);

  const handleAddToBasket = (item) => {
    addItemToBasket(item);
    alert(`Ви додали ${item.name} до кошика за ${item.price} грн!`);
  };

  return (
    <div className="container">
      <h1>Ласкаво просимо до нашого Піца кафе!</h1>
      <p>
        Тут кожен кульгає у світ програмування, а кожна зупинка - це смак
        відмінної піци та ароматної кави.
      </p>
      <p>
        У нашому закладі ми відкриваємо для вас нові гастрономічні виміри, де
        кожен ковзанок миші або клавіатури перетворюється на смачний код.
      </p>
      <p>
        Забудьте про стрес і насолоджуйтесь справжнім смаком програмування разом
        з нами!
      </p>
      <p>
        Бо, як кажуть, програміст це машина з перетворення піци й кави в код.
      </p>
      <div className="offer">
        <h2>Акційна пропозиція:</h2>
        <p>Отримайте знижку 10% при покупці будь-якого з цих наборів!</p>
        <p>Оберіть один з наших комбінованих наборів:</p>
        <ul>
          {promoItems.map((item, index) => (
            <li key={index}>
              <div className={item.available ? "" : "opacity"}>
                <img
                  src={item.image}
                  alt={item.name}
                  width="300"
                  height="200"
                />
                <br />
                {item.name} - Ціна: {item.prices} грн
              </div>
              <button
                onClick={() =>
                  handleAddToBasket({ ...item, price: item.prices })
                }
                disabled={!item.available}
              >
                Додати в кошик
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Description;
