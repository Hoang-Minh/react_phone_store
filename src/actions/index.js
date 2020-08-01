import {
  FETCH_PHONES,
  ADD_PHONE_TO_CART,
  REMOVE_PHONE_FROM_CART,  
} from "./type";
import { storeProducts } from "../data";

export const fetchPhones = () => (dispatch, getStore) => {
  console.log("fetchPhones");
  dispatch({
    type: FETCH_PHONES,
    payload: getStore().phones.length === 0 ? storeProducts : getStore().phones,
  });
};

export const addPhoneToCart = (id) => (dispatch, getStore) => {
  console.log("add phone to cart");
  const product = getStore().phones.find((phone) => phone.id === id);
  dispatch({ type: ADD_PHONE_TO_CART, payload: product });
};

export const removePhoneFromCart = (id) => (dispatch, getStore) => {
  console.log("remove phone from cart");
  const product = getStore().phones.find((phone) => phone.id === id);
  dispatch({ type: REMOVE_PHONE_FROM_CART, payload: product });
};

