const logoutItems = document.querySelectorAll(".logged-out");
const loginItems = document.querySelectorAll(".logged-in");

const selectedColor = document.querySelectorAll(".selected-color");
const deselectedColor = document.querySelectorAll(".deselected-color");

function setupUI(user) {
  if (user) {
    loginItems.forEach((item) => (item.style.display = "block"));
    logoutItems.forEach((item) => (item.style.display = "none"));
    selectedColor.forEach((item) => (item.style.display = "none"));
  } else {
    loginItems.forEach((item) => (item.style.display = "none"));
    logoutItems.forEach((item) => (item.style.display = "block"));
  }
}

function goToBoard() {
  if (playerColor != undefined) {
    selectedColor.forEach((item) => (item.style.display = "block"));
    deselectedColor.forEach((item) => (item.style.display = "none"));
    joinGame()
  } else {
    alert("plz pick your color");
  }
}