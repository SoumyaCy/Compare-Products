import React from "react";
import { Link } from "react-router-dom";
import { FormRow } from "../components/FormRow";
import { useProductContext } from "../context/ProductContext";
import { UpArrow, DownArrow } from "../components/arrows";
import axios from "axios";

export const SearchPage = () => {
  const { productSearch, setProductSearch } = useProductContext();

  const { sortOrder } = productSearch;
  let newOrder = "";
  const handleChange = (e) => {
    // console.log(e.target.name);
    setProductSearch((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  //api call
  const getProducts = async () => {
    const response = await axios.get(`/${productSearch.search}`);
    const { flipkart } = response.data.productFlipkart;
    const { amazon } = response.data.productAmazon;
    console.log(flipkart, amazon);
  };

  return (
    <div>
      <FormRow
        type="text"
        value={productSearch.search}
        name="search"
        onChange={handleChange}
      />

      <button
        onClick={() => {
          sortOrder === "desc" ? (newOrder = "asc") : (newOrder = "desc");
          setProductSearch((prev) => {
            return { ...prev, sortOrder: newOrder };
          });
        }}
      >
        Sort by price
        {sortOrder === "" || sortOrder === "asc" ? <UpArrow /> : <DownArrow />}
      </button>

      <button type="submit" onClick={getProducts}>
        Search
      </button>
      <Link to="/">LandingPage</Link>
    </div>
  );
};
