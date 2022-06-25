import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormRow } from "../components/FormRow";
import { useProductContext } from "../context/ProductContext";
import { UpArrow, DownArrow } from "../components/arrows";
import { Card } from "../components/Card";
const fp = JSON.parse(localStorage.getItem("fProds"));
const ap = JSON.parse(localStorage.getItem("aProds"));

export const SearchPage = () => {
  const { nextSortOrder, getProducts, setSortOrder } = useProductContext();
  const [finalProductsF, setFinalProductsF] = useState([]);
  const [finalProductsA, setFinalProductsA] = useState([]);
  const [searchParam, setSearchParam] = useState("shoes");

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
    <div>
      <form className="form" action="post" onSubmit={handleSubmit}>
        <FormRow
          type="text"
          value={searchParam}
          name="search"
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Search
        </button>
      </form>
      <button onClick={getSortedProducts}>
        Sort by price
        {nextSortOrder === "" || nextSortOrder === "asc" ? (
          <UpArrow />
        ) : (
          <DownArrow />
        )}
      </button>
      <Link to="/">LandingPage</Link>
      <div className="product-card-container">
        {finalProductsA.length === 0 && finalProductsA.length === 0 ? (
          <p>products are loading</p>
        ) : (
          finalProductsA.map((eachProduct, index) => {
            return (
              <Card
                key={index}
                image={eachProduct.image}
                name={eachProduct.name}
                desc={eachProduct.desc}
                link={eachProduct.link}
                price={eachProduct.price}
              />
            );
          })
        )}
        {finalProductsF.map((eachProduct, index) => {
          return (
            <Card
              key={index}
              image={eachProduct.image}
              name={eachProduct.name}
              desc={eachProduct.desc}
              link={eachProduct.link}
              price={eachProduct.price}
            />
          );
        })}
      </div>
    </div>
  );
};
