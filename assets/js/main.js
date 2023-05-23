let span = document.querySelector(".up");

window.onscroll = function () {
  
  this.scrollY >= 500 ? span.classList.add("active") : span.classList.remove("active");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};