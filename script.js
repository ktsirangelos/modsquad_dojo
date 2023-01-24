"use strict";

const queryStr = location.search;
if (queryStr) {
  const [left, right] = queryStr.split("=");
  document.getElementById("name").textContent =
    right[0].toUpperCase() + right.slice(1);
}
