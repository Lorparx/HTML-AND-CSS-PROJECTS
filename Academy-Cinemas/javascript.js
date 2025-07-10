document.addEventListener('DOMContentLoaded', function() {
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
  setTimeout(function() {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('ticketInfo').textContent = message;
    document.getElementById('ticketInfo').style.display = 'block';
  }, 1000);
}

function buyTickets() {
  displaySelectedMovieOptions();
}