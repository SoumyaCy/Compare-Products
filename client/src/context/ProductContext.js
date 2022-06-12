import React, { useState, useContext } from "react";

const initialState = {
  search: "hey",
  sortOrder: "",
  filterType: null,
};

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [productSearch, setProductSearch] = useState(initialState);
  return (
    <ProductContext.Provider value={{ productSearch, setProductSearch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { useProductContext, ProductProvider, initialState };
