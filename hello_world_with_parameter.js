"use strict";

const queryStr = location.search;
if (queryStr) {
  const [left, right] = queryStr.split("=");
  if (left == "?name") {
    document.getElementById("name").textContent =
      right[0].toUpperCase() + right.slice(1);
  } else {
    alert(`Parameter should be "name"`);
  }
}
