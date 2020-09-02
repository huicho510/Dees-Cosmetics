export const initialState = {
  cart: ["1","2"],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      //logic for adding to cart
      return { ...state, basket: [...state.basket, action.item],
     };
    case "REMOVE_FROM_CART":
      //logic for removing
      return { state };
    default:
      return state;
  }
};

export default reducer;
