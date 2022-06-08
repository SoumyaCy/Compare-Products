const express = require("express");
const app = express();
const Ports = 5000;
const getFlipkartProducts = require("./Website/flipkart");
const getAmazonProducts = require("./Website/flipkart");

app.get("/", async (req, res) => {
  const flipkartProducts = await require("./Website/flipkart");
  const flipkart = { flipkart: flipkartProducts };
  const amazonProducts = await require("./Website/amazon");
  const amazon = { amazon: amazonProducts };
  const products = { productFlipkart: flipkart, productAmazon: amazon };
  res.send(products);
});

app.get("/:id", async (req, res) => {
  const { id: search } = req.params;

  const flipkartProducts = await getFlipkartProducts(search);
  const flipkart = { flipkart: flipkartProducts };
  const amazonProducts = await getAmazonProducts(search);
  const amazon = { amazon: amazonProducts };
  const products = { productFlipkart: flipkart, productAmazon: amazon };
  res.send(products);
});

const start = async () => {
  try {
    app.listen(Ports, () => {
      console.log(`The server is running on port ${Ports}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
// module.exports = search;
