var button = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".btn-close");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});