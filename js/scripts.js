var link = document.querySelector(".feedback-button");
if (link) {
var popup = document.querySelector(".feedback-modal");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var yourName = popup.querySelector("[name=your-name]");
var email = popup.querySelector("[name=email");
var letterText = popup.querySelector("[name=letter-text");

var isStorageSupport = true;
var storage = "";
var storageEmail = "";

try {
  storage = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage && storageEmail) {
    yourName.value = storage;
    email.value = storageEmail;
    letterText.focus();
  } else {
      yourName.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!yourName.value || !email.value || !letterText.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("name", yourName.value);
        localStorage.setItem("email", email.value);
        }
      }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

}


var mapLink = document.querySelector(".contacts-map");
if (mapLink) {
var mapPopup = document.querySelector(".map-modal");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
}
  
  
 var links = document.querySelectorAll(".button-catalog-item-action-buy");

if (links) {
  var popupBasket = document.querySelector(".basket-modal");
  var close = popupBasket.querySelector(".modal-close");

  links.forEach(function(item) {
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupBasket.classList.add("modal-show");
    });
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-show");
  });
}
