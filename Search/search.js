<<<<<<< HEAD
var searchString = "smartphone";
var searchItem = searchString.split(" ");
if (searchItem[0]) {
  var finalUrlString = searchItem[0];
}

for (let i = 1; i < searchItem.length; i++) {
  if (searchItem[i] != "") {
    finalUrlString += "%20" + searchItem[i];
  }
}

module.exports = finalUrlString;
=======
// const searchParameter = require("../app.js");
var searchString = "shoes";
module.exports = searchString;
>>>>>>> b28a14cbd22a6fa64bc804878d3106c46b9ce693
