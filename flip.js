const btn = document.querySelector(".btn");
const all = document.querySelector("body");
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const code = document.querySelector(".code");

btn.addEventListener("click", () => {
  let hex1 = "#";
  for (let i = 0; i < 6; i++) {
    hex1 += randomIndex();
  }
  all.style.backgroundColor = hex1;
  code.textContent = hex1;
});

let randomIndex = () => {
  let a = Math.floor(Math.random() * hex.length);
  return hex[a];
};
