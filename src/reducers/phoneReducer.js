import {
  FETCH_PHONES,
  ADD_PHONE_TO_CART,
  REMOVE_PHONE_FROM_CART,
} from "../actions/type";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PHONES:
      return action.payload;

    case ADD_PHONE_TO_CART:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            inCart: true,
            count: product.count + 1,
            total: product.total + 1,
          };
        }

        return product;
      });
    case REMOVE_PHONE_FROM_CART:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            inCart: product.count === 0 || product.total === 0 ? false : true,
            count: product.count === 0 ? 0 : product.count - 1,
            total: product.total === 0 ? 0 : product.total - 1,
          };
        }

        return product;
      });
    default:
      return state;
  }
};
