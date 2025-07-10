document.addEventListener('DOMContentLoaded', function () {
  // Initialize popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  popoverTriggerList.forEach(function (element) {
    var imgsrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgsrc + "'>";
    new bootstrap.Popover(element, {
      html: true,
      content: content,
      trigger: 'hover'
    });
  });
});

// Function to show the toast with ticket information
function displaySelectedMovieOptions() {
  var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
  var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
  var tickets = document.getElementById('quantity').value;
  var message = "You have selected " + tickets + " ticket(s) for the movie '" + movie + "' at " + time + ".";

  // Show spinner, hide ticket info
  document.getElementById('spinner').style.display = 'flex';
  document.getElementById('ticketInfo').style.display = 'none';

  var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
  toast.show();

  // After 1 second, hide spinner and show ticket info
  setTimeout(function () {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('ticketInfo').textContent = message;
    document.getElementById('ticketInfo').style.display = 'block';
  }, 1000);
}

function buyTickets() {
  displaySelectedMovieOptions();
}

//JQUERY
//Shrinks header size when the document is scrolled down by 80 pixels
$(document).on("scroll", function () {
  //When the webpage is scrolled down from the top by 50px this
  //if statement will trigger
  if ($(document).scrollTop() > 50) {
    //Once the 50px requirment has been met add the
    //nav-shrink class selctor to the same HTML element
    //that has the nav class
    $("nav").addClass("nav-shrink");
    //Adjust the position of the mobile drop menu
    //to accommodate the new hieght decrease
    $("div.navbar-collapse").css("margin-top", "-6px");
  } else {
    //if the webpage has not been scrolled down or
    //is back at the top the nav-shrink class selector
    //is removed from the HTML element with the nav
    //class selector
    $("nav").removeClass("nav-shrink");
    //The margin for the drop down menu is now
    //returned to it's orginal amount
    $("div.navbar-collapse").css("margin-top", "14px");
  }
});

// Close mobile menu when a navigation link is clicked
$(document).ready(function () {
  // Collapse the navbar when any nav-link or dropdown-item is clicked (mobile)
  $('.navbar-collapse').on('click', '.nav-link, .dropdown-item', function () {
    $('.navbar-collapse').collapse('hide');
  });
});