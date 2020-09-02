export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "ADD_TO_CART":
      //logic for adding to cart
      return { ...state, cart: [...state.cart, action.item],
     };
    case "REMOVE_FROM_CART":
      //logic for removing
      return { state };
    default:
      return state;
  }
};

export default reducer;
