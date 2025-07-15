//functions to open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

//changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); //takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) { slideIndex = 1 } //if n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) { slideIndex = slides.length } //if n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //takes each item in the array "slides" and sets the display to none
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //adds the active styling to the dot associated with the image
}

//close the contact form when the user clicks off of it, starting with adding an event listener to clicks on the website
document.addEventListener("click", function (event) {
    //if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (
        event.target.matches(".cancel") ||
        (
            !event.target.closest(".form-popup") &&
            !event.target.closest(".Pop_Up_Button") &&
            !event.target.closest(".contact")
        )
    ) {
        closeForm()
    }
}, false)

// Prevent contact form from submitting and reloading the page
document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".form-container");
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            closeForm();
            alert("Thank you for your message!");
        });
    }
});