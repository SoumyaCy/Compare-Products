const puppeteer = require("puppeteer-core");
const Search = require("../Search/search");
const {
  Name,
  Price,
  Description,
  Image,
  Link,
} = require("../Xpaths/flipkartXpaths");

const productFunction = async () => {
  const URL = `https://www.flipkart.com/search?q=${Search}`;
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto(URL, {
    timeout: 0,
  });

  await page.waitForSelector("body");

  const nestedHandles1 = await page.$x(Name);
  const productName = await Promise.all(
    nestedHandles1.map((el) => el.evaluate((el) => el.innerText))
  );

  const nestedHandles2 = await page.$x(Price);
  const productPrice = await Promise.all(
    nestedHandles2.map((el) => el.evaluate((el) => el.innerText))
  );

  const nestedHandles3 = await page.$x(Image);
  const productImage = await Promise.all(
    nestedHandles3.map((el) => el.evaluate((el) => el.src))
  );

  const nestedHandles4 = await page.$x(Description);
  const productDescription = await Promise.all(
    nestedHandles4.map((el) => el.evaluate((el) => el.innerText))
  );

  const nestedHandles5 = await page.$x(Link);
  const productLink = await Promise.all(
    nestedHandles5.map((el) => el.evaluate((el) => el.href))
  );

  var products = {
    productName: productName,
    productPrice: productPrice,
    productImage: productImage,
    productDescription: productDescription,
    productLink: productLink,
  };

  await browser.close();
  return products;
};

module.exports = productFunction;
