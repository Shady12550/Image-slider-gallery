let preBtn = document.querySelector(".pre");
let nextBtn = document.querySelector(".next");
let sliders = document.querySelectorAll(".slider img");
let imgId = document.querySelector(".img-id");
let gallery = document.querySelector(".gallery");
let auto = document.querySelector(".auto");
let stopAuto = document.querySelector(".stop-auto");
let state = document.querySelector(".state");
let currentSlide = 0;
let interval;
let range = document.querySelector(".range");
let fin = document.querySelector(".finally");
fin.style.display = "none";
// auto & stop
// onload
window.onload = () => {
  let intervalTime = parseFloat(document.querySelector(".range").value) * 1000;
  interval = setInterval(toNext, intervalTime);
  state.innerHTML = "Outo Is On";
  state.style.backgroundColor = "#98d7c4";
  auto.disabled = true;
};
// auotBtn
auto.addEventListener("click", forAuoto);
function forAuoto() {
  let intervalTime = parseFloat(document.querySelector(".range").value) * 1000;
  interval = setInterval(toNext, intervalTime);
  state.innerHTML = "Outo Is On";
  auto.disabled = true;
  stopAuto.disabled = false;
  state.style.backgroundColor = "#9ccbc4";
  state.style.opacity = 1;
  fin.style.display = "none";
}
// stopbtn
stopAuto.addEventListener("click", forStop);
function forStop() {
  clearInterval(interval);
  state.innerHTML = `<a href="https://www.linkedin.com/in/shady-ah-783154317/"
        ><i class="fa-brands fa-linkedin icons"></i
      ></a>      <a href="https://github.com/Shady12550"
        ><i class="fa-brands fa-github icons"></i
      ></a>`;
  auto.disabled = false;
  stopAuto.disabled = true;
  state.style.opacity = 1;
  state.style.backgroundColor = "#a5a5a5";
  fin.style.display = "flex";
}

//range
range.addEventListener("input", forStop);

gallery.style.gridTemplateColumns = `repeat(${sliders.length}, 1fr)`;
// auto when onload

controlers();
// active state
function goToSlide(n) {
  sliders[currentSlide].classList.remove("active");
  currentSlide = (n + sliders.length) % sliders.length;
  sliders[currentSlide].classList.add("active");
  controlers();
  updateActiveState(currentSlide);
}

// moving
preBtn.addEventListener("click", function () {
  goToSlide(currentSlide - 1);
});
function toNext() {
  goToSlide(currentSlide + 1);
}
nextBtn.onclick = toNext;
function controlers() {
  preBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === sliders.length - 1;
  imgId.innerHTML = `Image ${currentSlide + 1} of ${sliders.length}`;
}
// Thumbnails
sliders.forEach((img, index) => {
  let thumbnail = img.cloneNode();
  gallery.appendChild(thumbnail);
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });
});
function updateActiveState(index) {
  gallery.querySelectorAll("img").forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}
