import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzaItems: [],
  coffeeItems: [],
  promoItems: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setPizzaItems(state, action) {
      state.pizzaItems = action.payload;
    },
    setCoffeeItems(state, action) {
      state.coffeeItems = action.payload;
    },
    setPromoItems(state, action) {
      state.promoItems = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
  },
});

export const { setPizzaItems, setCoffeeItems, setPromoItems } =
  menuSlice.actions;
export default store;

export const selectPizzaItems = (state) => state.menu.pizzaItems;
export const selectCoffeeItems = (state) => state.menu.coffeeItems;
export const selectPromoItems = (state) => state.menu.promoItems;
