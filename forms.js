const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const form = document.querySelector("#form");

form.addEventListener("sumit", (event) => {
  event.preventDefault();
  const fiels = new window.FormData(event.target);
  const value = fiels.get("value");
  console.log(value);
});
