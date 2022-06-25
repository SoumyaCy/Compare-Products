import React from "react";
import { Link } from "react-router-dom";
import { FormRow } from "../components/FormRow";
import { useProductContext } from "../context/ProductContext";

export const LandingPage = () => {
  const { productSearch, setProductSearch } = useProductContext();
  const handleChange = (e) => {
    console.log(e.target.name);
    setProductSearch((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div>
      Welcome {productSearch.search}
      <FormRow
        type="text"
        value={productSearch.search}
        name="search"
        onChange={handleChange}
      />
      <nav>
        <Link to="/">LandingPage</Link>
        <Link to="/search">SearchPage</Link>
      </nav>
    </div>
  );
};
