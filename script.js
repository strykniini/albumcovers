// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

document.getElementById("loginLink").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("loginPopup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
  document.getElementById("loginPopup").style.display = "none";
});

// Optional: close when clicking outside the box
window.addEventListener("click", function(e) {
  if (e.target === document.getElementById("loginPopup")) {
    document.getElementById("loginPopup").style.display = "none";
  }
});
