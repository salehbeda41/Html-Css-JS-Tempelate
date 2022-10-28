window.onscroll = function() { myFunction() };
var navbar = document.querySelector("#navi");
var sticky = navbar.offsetTop;
var scrollButton = document.querySelector("#ScBtn");

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticki");
        scrollButton.classList.add("scrollButton");
        scrollButton.classList.remove("hideButton");
    } else {
        navbar.classList.remove("sticki");
        scrollButton.classList.add("hideButton");
        scrollButton.classList.remove("scrollButton");
    }
}


function ScrollFun() {
    if (this.id == "ScBtn") {
        window.scrollTo(0, 0);

    }

}