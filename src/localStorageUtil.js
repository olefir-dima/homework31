export const addItemToBasket = (item) => {
  const basket = getBasket();
  const key = item.size ? `${item.name} ${item.size}` : item.name;
  if (basket[key]) {
    basket[key].quantity += 1;
  } else {
    basket[key] = { quantity: 1, price: item.price };
  }
  localStorage.setItem("basket", JSON.stringify(basket));
  return getTotalItems();
};

export const removeItemFromBasket = (item) => {
  const basket = getBasket();
  const key = item.size ? `${item.name} ${item.size}` : item.name;
  if (basket[key]) {
    if (basket[key].quantity > 1) {
      basket[key].quantity -= 1;
    } else {
      delete basket[key];
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    return getTotalItems();
  }
};

export const clearBasket = () => {
  localStorage.removeItem("basket");
};

export const getBasket = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : {};
};

export const getTotalItems = () => {
  const basket = getBasket();
  return Object.values(basket).reduce(
    (total, { quantity, price }) => total + quantity * price,
    0
  );
};
