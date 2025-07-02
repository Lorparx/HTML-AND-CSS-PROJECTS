//Recipe pop up modal section
//sets up the button that will open the modal
var btns = document.querySelectorAll("input.modal-button");

//defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//get the span that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

let modalTimeout = null; // Add this at the top of your script

//when the user clicks on the button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        let modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
        // Clear any existing timeout
        if (modalTimeout) {
            clearTimeout(modalTimeout);
        }
        // Set timeout to close the modal after 10 seconds
        modalTimeout = setTimeout(function () {
            modal.style.display = "none";
        }, 10000);
    };
}

//close the modal when the user clicks on the close button
for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (let j = 0; j < modals.length; j++) {
            modals[j].style.display = "none";
        }
        // Clear the timeout if modal is closed manually
        if (modalTimeout) {
            clearTimeout(modalTimeout);
            modalTimeout = null;
        }
    }
}

//email validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const valMsg = document.getElementById("valMsg");

    if (firstName === "" || lastName === "" || email === "" || phone === "" || message === "") {
        valMsg.innerHTML = '<p style="color:red;">Please fill out all fields.</p>';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valMsg.innerHTML = '<p style="color:red;">Please enter a valid email address.</p>';
        return;
    }

    // If all validations pass, show thank you message
    valMsg.innerHTML = '<p style="color:green;">Thank you for submitting the form!</p>';

    // Optionally, clear the form fields
    document.getElementById("contactForm").reset();

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message
    };
    console.log(JSON.stringify(formData)); // Log form data to console
    // Here you can also send the form data to a server if needed
});
