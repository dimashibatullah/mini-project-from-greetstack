const inputBox = document.querySelector("#input-box");
const btnAdd = document.querySelector("#button-add");
const listDisplay = document.querySelector("#list");

btnAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerHTML = inputBox.value;
  listDisplay.appendChild(li);
  inputBox.value = "";
  const span = document.createElement("span");
  span.innerHTML = "x";
  li.appendChild(span);
  saveData();
});

listDisplay.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    listDisplay.removeChild(e.target.parentElement);
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listDisplay.innerHTML);
}

function loadData() {
  listDisplay.innerHTML = localStorage.getItem("data");
}
loadData();
