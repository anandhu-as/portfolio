window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  window.scrollY > 0
    ? navbar.classList.add("fixed-nav")
    : navbar.classList.remove("fixed-nav");
});
