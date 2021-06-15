// Polyfill //

/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
 if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}


// Sidebar (mobile) //

const sidebarToggleBtn = document.querySelector(".menu__button");
const menuIcon = document.querySelector(".menu__icon");
const sidebar = document.querySelector(".product-display__sidebar")

sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle("menu__icon--active");
  sidebar.classList.toggle("product-display__sidebar--active");
};

// Product display Card //

const btnShowMoreCards = document.querySelector(".product-display__btn-show-more");
const hiddenCards = document.querySelectorAll(".product-display__main-content-link--hidden");

btnShowMoreCards.addEventListener("click", function () {
  hiddenCards.forEach(function (card) {
    card.classList.remove("product-display__main-content-link--hidden");
  })
})

// Widgets open/close //

const widgetTitles = document.querySelectorAll(".product-display__widget-title");

widgetTitles.forEach(function (item) {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("product-display__option--hidden");
    item.classList.toggle("product-display__widget-title--active");
  })
})

// Location Wigdet //

const checkboxAny = document.getElementById("location-05");
const topLocationCheckboxes = document.querySelectorAll("[data-location-param]"); //all ckeckboxes exept from the last one

checkboxAny.addEventListener("change", function () { //if the last one checkbox is checked, un-check other checkboxes
  if (checkboxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
  }
})

topLocationCheckboxes.forEach(function (item) { //if one of all ckeckboxes exept from the last one is checked, un-check the last one
  item.addEventListener("change", function () {
    if (checkboxAny.checked) {
      checkboxAny.checked = false;
    }
  })
})

// Options Widget //

const btnShowMoreOptions = document.querySelector(".product-display__option-button-show");
const hiddenOptions = document.querySelectorAll(".product-display__option--hidden");

btnShowMoreOptions.onclick = function (e) {
  e.preventDefault();

  if (btnShowMoreOptions.dataset.options == "hidden") { //if options were hidden, show them and change text of the button 
    hiddenOptions.forEach(function (item) {
      item.style.display = "block";
    })
    btnShowMoreOptions.innerText = "Скрыть";
    btnShowMoreOptions.dataset.options = "visible";
  } else if (btnShowMoreOptions.dataset.options == "visible") { //if options were visible, hide them and change text of the button 
    hiddenOptions.forEach(function (item) {
      item.style.display = "none";
    })
    btnShowMoreOptions.innerText = "Показать еще";
    btnShowMoreOptions.dataset.options = "hidden";
  }
  
}