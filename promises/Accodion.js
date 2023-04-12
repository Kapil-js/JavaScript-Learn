const accodions = document.querySelectorAll(".accodion");

accodions.forEach((accodion) => {
  const icon = accodion.querySelector(".icon");
  const answer = accodion.querySelector(".answer");

  accodion.addEventListener("click", () => {
    // icon.classList.toggle('active')
    // answer.classList.toggle('active')
    if (icon.classList.contains("active")) {
      icon.classList.remove("active");
      answer.style.maxHeight = null;
    } else {
      icon.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
