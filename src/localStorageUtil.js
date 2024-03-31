export const addItemToBasket = (item) => {
  const basket = getBasket();
  const key = `${item.name} ${item.size}`;
  if (basket[key]) {
    basket[key] += 1;
  } else {
    basket[key] = 1;
  }
  localStorage.setItem("basket", JSON.stringify(basket));
  return getTotalItems();
};

export const removeItemFromBasket = (item) => {
  const basket = getBasket();
  const key = `${item.name} ${item.size}`;
  if (basket[key]) {
    if (basket[key] > 1) {
      basket[key] -= 1;
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
  return Object.values(basket).reduce((total, quantity) => total + quantity, 0);
};
