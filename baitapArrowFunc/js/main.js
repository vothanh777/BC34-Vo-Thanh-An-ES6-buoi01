const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
const loadColor = () => {
  let content = "";
  for (let index = 0; index < colorList.length; index++) {
    if (index === 0) {
      content += `<button class="color-button ${colorList[index]} active"></button>`;
    } else {
      content += `<button class="color-button ${colorList[index]}"></button>`;
    }
  }
  return content;
};
document.querySelector("#colorContainer").innerHTML = loadColor();

const colorBtnList = document.querySelectorAll(".color-button");
colorBtnList.forEach((colorBtn) => {
  colorBtn.addEventListener("click", () => {
    document.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById("house").className = "house";
    let color = colorBtn.classList[1];
    colorBtn.classList.add("active");
    document.getElementById("house").classList.add(color);
  });
});
