import fetch from "node-fetch";

let url = "https://apis.ccbp.in/wiki-search?search=India";
let options = {
  method: "GET",
};

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
  })
  .catch(function (error) {
    console.error("Error:", error);
  });
