const puppeteer = require("puppeteer-core");
const Search = require("../Search/search");
const {
  Name,
  Price,
  Image,
  Link,
  Description,
} = require("../Xpaths/amazonXpaths");

const productFunction = async (searchParameter) => {
  var searchItem = searchParameter.split(" ");
  if (searchItem[0]) {
    var finalUrlString = searchItem[0];
  }

  for (let i = 1; i < searchItem.length; i++) {
    if (searchItem[i] != "") {
      finalUrlString += "%20" + searchItem[i];
    }
  }
  const URL = `https://www.amazon.in/s?k=${finalUrlString}`;
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto(URL, {
    timeout: 0,
  });

  await page.waitForSelector("body");

  const nestedHandles1 = await page.$x(Name);
  const productName = await Promise.all(
    nestedHandles1.map((el) =>
      el.evaluate((el) => {
        if (!el) {
          return "";
        }
        return el.innerText;
      })
    )
  );

  const nestedHandles2 = await page.$x(Price);
  if (nestedHandles2 !== null) {
    var productPrice = await Promise.all(
      nestedHandles2.map((el) =>
        el.evaluate((el) => {
          if (!el) {
            return "";
          }
          return el.innerText;
        })
      )
    );
  } else {
    productPrice.push("");
  }
  const nestedHandles3 = await page.$x(Image);
  const productImage = await Promise.all(
    nestedHandles3.map((el) =>
      el.evaluate((el) => {
        if (!el) {
          return "";
        }
        return el.src;
      })
    )
  );

  const nestedHandles4 = await page.$x(Description);
  const productDescription = await Promise.all(
    nestedHandles4.map((el) =>
      el.evaluate((el) => {
        if (!el) {
          return "";
        }
        return el.innerText;
      })
    )
  );

  const nestedHandles5 = await page.$x(Link);
  const productLink = await Promise.all(
    nestedHandles5.map((el) =>
      el.evaluate((el) => {
        if (!el) {
          return "";
        }
        return el.href;
      })
    )
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
