const outputEl = document.querySelector(".output");

// button elements
const oneEl = document.querySelector(".one");
const twoEl = document.querySelector(".two");
const threeEl = document.querySelector(".three");
const fourEl = document.querySelector(".four");
const fiveEl = document.querySelector(".five");
const sixEl = document.querySelector(".six");
const sevenEl = document.querySelector(".seven");
const eightEl = document.querySelector(".eight");
const nineEl = document.querySelector(".nine");
const zeroEl = document.querySelector(".zero");
const delEl = document.querySelector(".del");
const addEl = document.querySelector(".add");
const subEl = document.querySelector(".sub");
const divEl = document.querySelector(".div");
const pointEl = document.querySelector(".point");
const multEl = document.querySelector(".mult");
const resetEl = document.querySelector(".reset");
const submitEl = document.querySelector(".submit");

// radio elements
const colorThemes = document.querySelectorAll("input[name='theme']");

oneEl.addEventListener("click", () => {
  outputEl.value += oneEl.value;
});
twoEl.addEventListener("click", () => {
  outputEl.value += twoEl.value;
});
threeEl.addEventListener("click", () => {
  outputEl.value += threeEl.value;
});
fourEl.addEventListener("click", () => {
  outputEl.value += fourEl.value;
});
fiveEl.addEventListener("click", () => {
  outputEl.value += fiveEl.value;
});
sixEl.addEventListener("click", () => {
  outputEl.value += sixEl.value;
});
sevenEl.addEventListener("click", () => {
  outputEl.value += sevenEl.value;
});
eightEl.addEventListener("click", () => {
  outputEl.value += eightEl.value;
});
nineEl.addEventListener("click", () => {
  outputEl.value += nineEl.value;
});
zeroEl.addEventListener("click", () => {
  outputEl.value += zeroEl.value;
});
addEl.addEventListener("click", () => {
  outputEl.value += addEl.value;
});
multEl.addEventListener("click", () => {
  outputEl.value += multEl.value;
});
divEl.addEventListener("click", () => {
  outputEl.value += divEl.value;
});
subEl.addEventListener("click", () => {
  outputEl.value += subEl.value;
});
pointEl.addEventListener("click", () => {
  outputEl.value += pointEl.value;
});
resetEl.addEventListener("click", () => {
  outputEl.value = "";
});
delEl.addEventListener("click", () => {
  outputEl.value = outputEl.value.slice(0, -1);
});
submitEl.addEventListener("click", () => {
  try {
    outputEl.value = eval?.(outputEl.value);
  } catch (error) {
    outputEl.value = "Error";
  }
});

// store selected theme
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

colorThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    saveTheme(theme.id);
  });
});

// set selected theme

function setTheme() {
  const selectedTheme = localStorage.getItem("theme");

  colorThemes.forEach((theme) => {
    if (theme.id === selectedTheme) {
      theme.checked = true;
    }
  });
//   fallback for no :has() support
  document.documentElement.className = selectedTheme;
}

document.onload = setTheme();
