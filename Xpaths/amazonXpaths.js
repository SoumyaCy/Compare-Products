const Name =
  "//*[@data-index  > 0 and @data-asin !='' and @data-uuid != '' and not(@style)]/*[descendant::span[@class = 'a-price']]//h2";
const Price =
  "//*[@data-index  > 0 and @data-asin !='' and @data-uuid != '' and not(@style)]/*[descendant::span[@class = 'a-price']]//span[@class = 'a-price-whole']";
const Description =
  "//*[@data-index  > 0 and @data-asin !='' and @data-uuid != '' and not(@style)]/*[descendant::span[@class = 'a-price']]//h5";
const Image =
  "//*[@data-index  > 0 and @data-asin !='' and @data-uuid != '' and not(@style)]/*[descendant::span[@class = 'a-price']]//img[@class = 's-image' and @alt != '']";
const Link =
  "//*[@data-index  > 0 and @data-asin !='' and @data-uuid != '' and not(@style)]/*[descendant::span[@class = 'a-price']]//img[@class = 's-image' and @alt != '']/../..";

module.exports = {
  Name,
  Price,
  Image,
  Link,
  Description,
};
