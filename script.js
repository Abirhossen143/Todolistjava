const selectItem = document.querySelector(".body ul");
const selectForm = document.querySelector(".todo");
selectItem.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    if (e.target.classList.contains("done")) {
      e.target.classList.remove("done");
    } else {
      e.target.classList.add("done");
    }
  }
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.remove();
  }
});
selectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.task.value;
  if (validateInput(input, e.target.task)) {
    selectItem.insertAdjacentElement(
      "afterbegin",
      newItem(e.target.task.value)
    );
    e.target.task.value = "";
  }
});

const validateInput = (input, element) => {
  if (input) {
    element.parentNode.classList.remove("error");
    return true;
  } else {
    element.parentNode.classList.add("error");
    return false;
  }
};
const newItem = (content) => {
  const createElement = document.createElement("li");
  createElement.innerHTML = content;
  createElement.insertAdjacentElement("afterbegin", removeButton());
  return createElement;
};
// const newItem = (content) => {
//   const creatElement = document.createElement("li");
//   creatElement.textContent = content;
//   creatElement.insertAdjacentElement("afterbegin", removeButton());
//   return creatElement;
// };

const removeButton = () => {
  const creatRemoveBtn = document.createElement("span");
  creatRemoveBtn.classList.add("remove");
  creatRemoveBtn.textContent = "X";
  return creatRemoveBtn;
};
