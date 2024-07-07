let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResults(result) {
  let { title, link, description } = result;

  let divEl = document.createElement("div");
  searchResultsEl.appendChild(divEl); // Append to searchResultsEl

  let anchorEl = document.createElement("a");
  anchorEl.textContent = title;
  anchorEl.href = link;
  anchorEl.target = "_blank";
  divEl.appendChild(anchorEl);

  let brEl = document.createElement("br");
  divEl.appendChild(brEl);

  let linkEl = document.createElement("a");
  linkEl.href = link;
  linkEl.textContent = link;
  linkEl.style.color = "green";
  linkEl.target = "_blank";
  divEl.appendChild(linkEl);

  let contentEl = document.createElement("p");
  contentEl.textContent = description;
  divEl.appendChild(contentEl);
}

function displayResults(search_results) {
  searchResultsEl.textContent = "";
  spinnerEl.classList.toggle("d-none");
  for (let result of search_results) {
    createAndAppendSearchResults(result);
  }
}

function searchWikipedia(event) {
  if (event.key === "Enter") {
    spinnerEl.classList.toggle("d-none");
    let searchValue = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchValue;
    let options = {
      method: "GET",
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipedia);
