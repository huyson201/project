// position fixed nav when scroll
window.onscroll = function () {
  const nav = document.querySelector("nav");
  if (window.pageYOffset > 0) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
};

// hide-show footer infor
const btn_show = document.querySelectorAll("footer .btn-show");
const list_items = document.querySelectorAll("footer .info");

for (let i = 0; i < btn_show.length; i++) {
  btn_show[i].addEventListener("click", () => {
    list_items[i].classList.toggle("show");
  });
}

// loading boxEmail after loading website
const boxEmail = document.querySelector(".get-our-email");
const x = window.matchMedia("(max-width: 760px)");
const y = window.matchMedia("(min-width: 760px)");

function hide() {
  if (window.innerWidth > 768) {
    boxEmail.style.display = "flex";
  } else {
    boxEmail.style.display = "none";
  }
}

window.addEventListener('load', () => {
  boxEmail.style.display = "flex";
  hide();
});
x.addListener(hide);
y.addListener(hide);


// hide box email after loading
const btnHideEmail = document.querySelector(".hide-email-box");
btnHideEmail.addEventListener("click", () => {
  boxEmail.style.display = "none";
});

// top to scroll
const toTop = document.querySelector('.to-top-box');
toTop.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
    left:0,
    bihavior:'smooth'
  })
})