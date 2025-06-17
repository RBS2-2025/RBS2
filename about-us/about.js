const containers = document.querySelectorAll(".members");
containers.forEach((container) => {
  //스크롤
  container.addEventListener("wheel", function (e) {
    if (e.deltaY != 0) {
      container.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  });
});

const wrappers = document.querySelectorAll(".member-wrapper");
wrappers.forEach((wrapper) => {
  const container = wrapper.querySelector(".members");

  const scrollbar = document.createElement("div");
  scrollbar.classList.add("scrollbar");
  wrapper.appendChild(scrollbar);

  const thumb = document.createElement("div");
  thumb.classList.add("thumb");
  scrollbar.appendChild(thumb);

  var width_menu = container.scrollWidth;
  var width_window = window.innerWidth;
  var scrollLeft = (container.scrollLeft / width_menu) * (width_window - 40);

  function update() {
    width_menu = container.scrollWidth;
    width_window = window.innerWidth;
    scrollLeft =
      container.scrollLeft / (container.scrollWidth - container.clientWidth);

    if (width_window >= width_menu) {
      thumb.style.display = "none";
      scrollbar.style.display = "none";
    } else {
      thumb.style.display = "block";
      scrollbar.style.display = "block";
    }

    thumb.style.width =
      ((width_window - 40) / width_menu) *
        (scrollbar.clientWidth - thumb.clientWidth) +
      "px";
    thumb.style.left =
      scrollLeft * (scrollbar.clientWidth - thumb.clientWidth) + "px";

    // console.log(width_window + "/" + width_menu);
  }
  update();
  container.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  window.addEventListener("load", update);
});
