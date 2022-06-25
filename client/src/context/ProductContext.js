import React, { useReducer, useContext } from "react";
import axios from "axios";
import { reducer } from "./reducer";
import { GET_PRODUCTS, GET_SORTED_PRODUCTS } from "./actions";

const fp = JSON.parse(localStorage.getItem("fProds"));
const ap = JSON.parse(localStorage.getItem("aProds"));
console.log(fp, ap);
const initialState = {
  isLoading: false,
  search: "shoes",
  nextSortOrder: "desc",
  flipkartProducts: fp ? [...fp] : [],
  amazonProducts: ap ? [...ap] : [],
};

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let flipkartArrayResponse = [];
  let amazonArrayResponse = [];

  //HANDLING LOCAL STORAGE
  const addItemToLocalStorage = ({ flipkartProducts, amazonProducts }) => {
    localStorage.setItem("fProds", JSON.stringify(flipkartProducts));
    localStorage.setItem("aProds", JSON.stringify(amazonProducts));
  };
  const removeItemFromLocalStorage = () => {
    localStorage.removeItem("fProds");
    localStorage.removeItem("aProds");
  };

  //SORT PRODUCTS
  const sort = (order) => {
    flipkartArrayResponse = [...state.flipkartProducts];
    amazonArrayResponse = [...state.amazonProducts];

    switch (order) {
      case "asc":
        console.log(`state order should be ascending is${order}`);
        flipkartArrayResponse.sort(function (a, b) {
          return a.price - b.price;
        });
        amazonArrayResponse.sort(function (a, b) {
          return a.price - b.price;
        });

        return;
      case "desc":
        console.log(`state order should be descending is${order}`);
        flipkartArrayResponse.sort(function (a, b) {
          return b.price - a.price;
        });
        amazonArrayResponse.sort(function (a, b) {
          return b.price - a.price;
        });
        return;
      default:
        return;
    }
  };

  //GET PRODUCTS
  const getProducts = async (searchParam) => {
    try {
      const response = await axios.get(`/${searchParam}`);
      // console.log(response);
      const { flipkart } = response.data.productFlipkart;
      const { amazon } = response.data.productAmazon;

      for (let i = 0; i < flipkart.productName.length; i++) {
        flipkartArrayResponse.push({
          name: flipkart.productName[i],
          image: flipkart.productImage[i],
          price: parseInt(
            flipkart.productPrice[i].split(",").join("").slice(1)
          ),
          desc: flipkart.productDescription[i],
          link: flipkart.productLink[i],
        });
      }
      for (let i = 0; i < amazon.productName.length; i++) {
        amazonArrayResponse.push({
          name: amazon.productName[i],
          image: amazon.productImage[i],
          price: parseInt(amazon.productPrice[i].split(",").join("")),
          desc: amazon.productDescription[i],
          link: amazon.productLink[i],
        });
      }

      dispatch({
        type: GET_PRODUCTS,
        payload: { flipkartArrayResponse, amazonArrayResponse, searchParam },
      });
      addItemToLocalStorage({
        flipkartProducts: flipkartArrayResponse,
        amazonProducts: amazonArrayResponse,
      });
      return { flipkartArrayResponse, amazonArrayResponse };
    } catch (error) {
      console.error(error);
    }
  };

  // SET SORT ORDER
  const setSortOrder = () => {
    // console.log(state.amazonProducts, state.flipkartProducts);
    // dispatch({ type: SET_SORT });
    sort(state.nextSortOrder);
    dispatch({
      type: GET_SORTED_PRODUCTS,
      payload: {
        flipkartArrayResponse,
        amazonArrayResponse,
      },
    });
    console.log(state.amazonProducts, state.flipkartProducts);
    addItemToLocalStorage({
      flipkartProducts: flipkartArrayResponse,
      amazonProducts: amazonArrayResponse,
    });
    return { flipkartArrayResponse, amazonArrayResponse };
  };

  return (
    <ProductContext.Provider value={{ ...state, getProducts, setSortOrder }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { useProductContext, ProductProvider, initialState };
