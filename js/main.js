let quastionSections = document.querySelectorAll(".quastion-section");

quastionSections.forEach((ele) => {
  ele.addEventListener("click", (eve) => {
    let parent = "";
    eve.target.classList.contains("quastion-section")
      ? (parent = eve.target)
      : (parent = eve.target.parentElement);
    if (parent.firstElementChild.classList.contains("quastion-show")) {
      parent.firstElementChild.classList.remove("quastion-show");
    } else {
      quastionSections.forEach((ele) => {
        ele.firstElementChild.classList.remove("quastion-show");
      });
      parent.firstElementChild.classList.add("quastion-show");
    }
  });
});
