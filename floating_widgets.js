"use strict";

const nearestUpperSquareFunction = (n) => Math.pow(Math.ceil(Math.sqrt(n)), 2);

const queryStr = location.search;

if (queryStr) {
  const [left, right] = queryStr.split("=");
  const isSquare = Math.sqrt(right);
  const notSquare = Number(right);
  if (Number.isInteger(notSquare)) {
    if (Number.isInteger(isSquare)) {
      const rows = [];
      const columns = [];
      for (let i = 1; i <= isSquare; i++) {
        rows[i] = document.createElement("div");
        rows[i].id = `centered_child${i}`;
        document.getElementById("centered").appendChild(rows[i]);
      }
      for (let j = 1; j <= isSquare; j++) {
        for (let i = 1; i <= isSquare; i++) {
          columns[i] = document.createElement("div");
          columns[i].className = "square group";
          document.getElementById(`centered_child${i}`).appendChild(columns[i]);
        }
      }
    } else {
      const nearestUpperSquare = nearestUpperSquareFunction(notSquare);
      const nearestSquareRoot = Math.sqrt(nearestUpperSquare);
      const rows = [];
      const columns = [];
      for (let i = 1; i <= nearestSquareRoot; i++) {
        rows[i] = document.createElement("div");
        rows[i].id = `centered_child${i}`;
        document.getElementById("centered").appendChild(rows[i]);
      }
      for (let j = 1; j <= nearestSquareRoot; j++) {
        for (let i = 1; i <= nearestSquareRoot; i++) {
          columns[i] = document.createElement("div");
          columns[i].className = "square group";
          columns[i].id = `square_group${i}`;
          document.getElementById(`centered_child${i}`).appendChild(columns[i]);
        }
      }
      const difference = nearestUpperSquare - notSquare;
      if (difference > nearestSquareRoot) {
        for (let i = 1; i <= nearestSquareRoot; i++) {
          document.getElementById(`square_group${i}`).remove(columns[i]);
        }
        for (let i = 1; i <= difference - nearestSquareRoot; i++) {
          document.getElementById(`square_group${i}`).remove(rows[i]);
        }
      } else {
        for (let i = 1; i <= difference; i++) {
          document.getElementById(`square_group${i}`).remove(columns[i]);
        }
      }
    }
  } else {
    alert("Number is not an integer!");
  }
}
