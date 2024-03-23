var settingsMenu = document.querySelector(".settings-menu");
var navvv = document.querySelector("nav");
var top = document.querySelector(".h11");
var menu = document.querySelector("ul");
var nav_icon = document.querySelector(".nav-user-icon");
var darkbtn = document.querySelector("#dark-btn");
var bdy = document.querySelector("body");
var container = document.querySelector(".container");
var nav = document.querySelector("nav");
var rigthBar = document.querySelector(".right-side-bar");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    navvv.classList.remove("navvvv");
    navvv.classList.add("navvv");
  } else {
    navvv.classList.remove("navvv");
    navvv.classList.add("navvvv");
  }
});
window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
  }
};
function SettingsMenu() {
  settingsMenu.classList.toggle("settings-menu-height");
}
nav_icon.addEventListener("mouseover", () =>
  settingsMenu.classList.add("settings-menu-height")
);
nav_icon.addEventListener("mouseleave", () =>
  settingsMenu.classList.remove("settings-menu-height")
);
settingsMenu.addEventListener("mouseover", () =>
  settingsMenu.classList.add("settings-menu-height")
);
settingsMenu.addEventListener("mouseleave", () =>
  settingsMenu.classList.remove("settings-menu-height")
);

darkbtn.onclick = function () {
  darkbtn.classList.toggle("dark-btn-on");
  //     bdy.classList.toggle("bdy")
  //    nav.classList.toggle("navv")
  //    rigthBar.classList.toggle("rightBar")
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkbtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkbtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}

container.onclick = function () {
  settingsMenu.classList.remove("settings-menu-height");
};
