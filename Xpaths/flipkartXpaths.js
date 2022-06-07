const Name =
  "//*[@data-id != '' and @style != '']//div[@class = '_4rR01T' or @class = '_2WkVRV']";
const Price =
  "//*[@data-id != '' and @style != '']//div[contains(concat(' ', @class, ' '), '_30jeq3')]";
const Description =
  "//*[@data-id != '' and @style != '']//a[@class = '_1fQZEK' or contains(concat(' ', @class, ' '), ' IRpwTa')]";
const Image = "//*[@data-id != '' and @style != '']//img[@alt]";
const Link =
  "//*[@data-id != '' and @style != '']//a[@class = '_1fQZEK' or contains(concat(' ', @class, ' '), ' IRpwTa')]";

module.exports = {
  Name,
  Price,
  Image,
  Description,
  Link,
};
