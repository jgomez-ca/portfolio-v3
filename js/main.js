/**
* Template Name: PortTucows - v3
* Updated: April 19 2025 with Bootstrap v5.3.1
* Author: Jorge Gomez
* License: NOT FREE
*/



(function() {

  // Automatically adds the year to the footer copyright
  const footerYear = document.querySelectorAll(".year");
  footerYear.forEach(copyright => {
    copyright.innerHTML = new Date().getFullYear();
  });

})