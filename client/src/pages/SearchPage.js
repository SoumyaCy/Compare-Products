import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowUpCircleSharp, IoArrowDownCircle } from "react-icons/io5";

import { useProductContext } from "../context/ProductContext";

import { Card } from "../components/Card";
import "../styles/Search.css";
const fp = JSON.parse(localStorage.getItem("fProds"));
const ap = JSON.parse(localStorage.getItem("aProds"));

export const SearchPage = () => {
  const { nextSortOrder, getProducts, setSortOrder } = useProductContext();
  const [finalProductsF, setFinalProductsF] = useState([]);
  const [finalProductsA, setFinalProductsA] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };
  const getSortedProducts = async () => {
    const { flipkartArrayResponse, amazonArrayResponse } = await setSortOrder();

    setFinalProductsF([...flipkartArrayResponse]);
    setFinalProductsA([...amazonArrayResponse]);
  };
  useEffect(() => {
    fp && setFinalProductsF([...fp]);
    ap && setFinalProductsA([...ap]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { flipkartArrayResponse, amazonArrayResponse } = await getProducts(
      searchParam
    );

    setFinalProductsF([...flipkartArrayResponse]);
    setFinalProductsA([...amazonArrayResponse]);
  };
  return (
    <div className="search-page-container">
      <div className="logo-container"></div>
      <span className="heading-text">SCRAPER</span>
      <span className="Flipkart-heading">Flipkart</span>
      <span className="Amazon-heading">Amazon</span>
      <div className="seperator"></div>
      <input
        className="form-search-page"
        type="text"
        placeholder="Search your products"
        value={searchParam}
        name="search"
        onChange={handleChange}
      />
      {/* <form className="form-search-page" action="post">
        <FormRow
          type="text"
          value={searchParam}
          name="search"
          onChange={handleChange}
        />

      </form> */}
      <button className="btn-submit" type="button" onClick={handleSubmit}>
        Search
      </button>
      <button className="btn-sort" onClick={getSortedProducts}>
        Sort
        {nextSortOrder === "" || nextSortOrder === "asc" ? (
          <IoArrowUpCircleSharp />
        ) : (
          <IoArrowDownCircle />
        )}
      </button>
      <Link className="home-logo" to="/"></Link>
      <div className="product-card-container">
        {
          /* {finalProductsA.length === 0 && finalProductsA.length === 0 ? (
          <p>products are loading</p>
        ) : ( */
          finalProductsA.map((eachProduct, index) => {
            return (
              <Card
                company="amazon"
                index={index}
                key={index}
                image={eachProduct.image}
                name={eachProduct.name}
                link={eachProduct.link}
                price={eachProduct.price}
              />
            );
          })
        }
        {finalProductsF.map((eachProduct, index) => {
          return (
            <Card
              company="flipkart"
              index={index}
              key={index}
              image={eachProduct.image}
              name={eachProduct.name}
              link={eachProduct.link}
              price={eachProduct.price}
            />
          );
        })}
      </div>
    </div>
  );
};
